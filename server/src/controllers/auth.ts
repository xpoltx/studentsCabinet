import express from "express";
import { CreateUserDTO } from "../dtos/user/CreateUser.dto";
import { createUser, getUserByConfirmToken, getUserByEmail, getUserBySessionToken, getUserByUUID, UserModel } from "../db/user";
import bcrypt from 'bcrypt'
import { LoginUserDTO } from "../dtos/user/LoginUser.dto";
import { AES } from "crypto-ts";
import genUUID from "../utils/genUUID";
import dotenv from "dotenv"
import { get } from "lodash";
import generateQRcode from "../utils/genQRcode";
import { sendConfirmMail } from "../utils/sendConfirmMail";

dotenv.config()

export const registration = async(req: express.Request, res: express.Response) =>{
    try {
        const values: CreateUserDTO = req.body;
        const existingUser = await getUserByEmail(values.email);
        if(existingUser){
            return res.status(201).json({err: "User with this email already exist"});
        }
        const encryptedPassword = (await bcrypt.hash(values.password, 10)).toString(); 
        values.password = encryptedPassword;
        values.confirmToken = genUUID()
        values.profilePic = `https://avatar.iran.liara.run/public/boy?username=${values.fullname.replace(' ', '_')}`;
        const regUser = await createUser(values);
        if(!regUser){
            return res.status(400).json({err: "Registration failed"});
        }
        await sendConfirmMail(values.email, values.confirmToken);
        const {password, ...newUserData} = regUser;
        return res.status(200).json(newUserData);
    } catch (error) {
        return res.status(500).json({error});        
    }
  
};

export const login = async(req: express.Request, res: express.Response)=>{
    try {
        const values: LoginUserDTO = req.body;

        const existingUser = await getUserByEmail(values.email).select('password');
        if(!existingUser){
            return res.status(400).json({error: "User doesnt exist"});
        }
        
        if(!await bcrypt.compare(values.password, existingUser.password!)){
            return res.status(400).json({error: "Wrong password"});
        }
        existingUser.sessionToken = AES.encrypt(existingUser.fullname, process.env.SECRET_KEY!).toString();
        existingUser.uuid = genUUID();
        await existingUser.save();
        res.cookie('User-auth', existingUser.sessionToken, {domain: 'localhost', path: '/'});
        const {password, ...userData} = existingUser.toObject();
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const qrCode = async(req: express.Request, res:express.Response)=>{
    try {
        const userEmail = get(req, 'identity.email') as string | undefined;
        const existingUser = await getUserByEmail(userEmail!);
        if(!existingUser){
            return res.status(400).json({error: "User doesnt exist"});
        }
        const uuid= genUUID();
        existingUser.uuid = uuid;
        await existingUser.save();
        const qr = await generateQRcode(existingUser.uuid);
        return res.status(200).send(`<img src="${qr}" alt="qr code" />`);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const loginUUID = async(req: express.Request, res:express.Response)=>{
    try {
        const {uuid} = req.body;
        if(!uuid){
            return res.status(400).json({ error: "Invalid UUID" });
        }
        const existingUser = await getUserByUUID(uuid);
        if(!existingUser){
            return res.status(400).json({error: "User doesnt exist"});
        }
        existingUser.uuid = undefined;
        await existingUser.save();
        return res.status(200).json( {message: "Auth successful", existingUser});
    } catch (error) {
        return res.status(500).json({error});
    }
}


export const confirmAccount = async(req: express.Request, res: express.Response) =>{
    try {
        const {inputToken} = req.body;
        const existingUser = await getUserByConfirmToken(inputToken);
        if(!existingUser){
            return res.status(400).json({error: "Wrong confirm token. Try again!"});
        }
        existingUser.confirmed = true;
        existingUser.confirmToken = undefined;
        await existingUser.save();
        return res.status(200).json({message: "Account confirmed successfully"});
    } catch (error) {
        return res.status(500).json({error});
    }
}
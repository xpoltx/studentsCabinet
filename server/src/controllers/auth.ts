import express from "express";
import { CreateUserDTO } from "../dtos/user/CreateUser.dto";
import { createUser, getUserByEmail } from "../db/user";
import bcrypt from 'bcrypt'
import { LoginUserDTO } from "../dtos/user/LoginUser.dto";
import { AES } from "crypto-ts";
import dotenv from "dotenv"

dotenv.config()

export const registration = async(req: express.Request, res: express.Response) =>{
    try {
        const values: CreateUserDTO = req.body;
        const existingUser = await getUserByEmail(values.email);
        if(existingUser){
            return res.status(200).json({err: "User with this email already exist"});
        }
        const encryptedPassword = (await bcrypt.hash(values.password, 10)).toString(); 
        values.password = encryptedPassword;
        values.profilePic = `https://avatar.iran.liara.run/public/boy?username=${values.fullname}`;
        const regUser = await createUser(values);
        return res.status(200).json(regUser);
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
            console.log(existingUser.password);
            return res.status(400).json({error: "Wrong password"});
        }
        existingUser.sessionToken = AES.encrypt(existingUser.fullname, process.env.SECRET_KEY!).toString();
        await existingUser.save();
        res.cookie('User-auth', existingUser.sessionToken, {domain: 'localhost', path: '/'});
        return res.status(200).json(existingUser);
    } catch (error) {
        return res.status(500).json({error});
    }
}


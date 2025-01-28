import express from "express";
import { deleteUser, getUsers, getUsersByRole, updateUser } from "../db/user";
import { UpdateUserDTO } from "../dtos/user/UpdateUser.dto";
import mongoose from "mongoose";

export const getAllUsers = async( req: express.Request, res: express.Response) =>{
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({error});
    }
};

export const getUsersByRoles = async( req: express.Request, res: express.Response) =>{
    try {
        const {role} = req.params;
        const users = await getUsersByRole(role);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({error});        
    }
};

export const updUser = async( req: express.Request, res: express.Response)=>{
    try {
        const {email} = req.params;
        const values: UpdateUserDTO = req.body;

        if(!values){
            return res.status(400).json({error: "Missing request body"});
        }
        const updatedUser = await updateUser(email, values);
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({error});                
    }
}

export const delUser = async( req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const deletedUser = await deleteUser(objectId);
        return res.status(200).json(deletedUser);
    } catch (error) {
        return res.status(500).json({error});        
    }
}
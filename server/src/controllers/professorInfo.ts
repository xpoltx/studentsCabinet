import express from "express"
import { createInfo, deleteInfo, getInfo, getInfoByGroup, updateInfo } from "../db/professorInfo";
import { getUserById, UserModel } from "../db/user";
import { CreateProfessorInfoDTO } from "../dtos/professorInfo/CreateProfessorInfo.dto";
import { UpdateProfessorInfoDTO } from "../dtos/professorInfo/UpdateProfessorInfo.dto";
import mongoose from "mongoose";


export const getProfessorInfo = async(req: express.Request, res: express.Response)=>{
    try {
        const {professorId} = req.params;
        const objectId = new mongoose.Types.ObjectId(professorId);
        const info = await getInfo(objectId);
        return res.status(200).json(info);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getCuratorGroup = async(req: express.Request, res: express.Response)=>{
    try {
        const {group} = req.params;
        const curatorInfo = await getInfoByGroup(group);
        const curatorName = await UserModel.findOne({_id:curatorInfo?.userId}).select('fullname')
        return res.status(200).json({
            group,
            curatorName,
        })
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const createProfessorInfo = async(req: express.Request, res: express.Response) =>{
    try {
        const values: CreateProfessorInfoDTO = req.body;
        const objectId = new mongoose.Types.ObjectId(values.userId);
        const existingUser = await getUserById(objectId)
        if(existingUser?.role !== 'professor'){
            return res.status(500).json({error: "This user cant accuire professors quality"})
        }
        const createdInfo = await createInfo(values);
        return res.status(200).json(createdInfo);
    } catch (error) {
        return res.status(500).json({error});       
    }
}

export const updateProfessorInfo = async(req: express.Request, res: express.Response) => {
        try {
            const {userId} = req.params;
            const objectId = new mongoose.Types.ObjectId(userId);
            const values: UpdateProfessorInfoDTO = req.body;
    
            if(!values){
                return res.status(400).json('Missing values');
            }
            const updatedInfo = await updateInfo(values, objectId);
            return res.status(200).json(updatedInfo);
        } catch (error) {
            return res.status(500).json({error});
        }
}

export const deleteProfessorInfo = async(req: express.Request, res: express.Response)=>{
    try {
        const {userId} = req.params;
        const objectId = new mongoose.Types.ObjectId(userId);
        const deletedInfo = await deleteInfo(objectId);
        return res.status(200).json(deletedInfo);
    } catch (error) {
        return res.status(500).json({error});        
    }
}
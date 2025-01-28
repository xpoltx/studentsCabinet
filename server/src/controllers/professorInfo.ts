import express from "express"
import { createInfo, deleteInfo, getInfo, getInfoByGroup, updateInfo } from "../db/professorInfo";
import { UserModel } from "../db/user";
import { CreateProfessorInfoDTO } from "../dtos/professorInfo/CreateProfessorInfo.dto";
import { UpdateProfessorInfoDTO } from "../dtos/professorInfo/UpdateProfessorInfo.dto";


export const getProfessorInfo = async(req: express.Request, res: express.Response)=>{
    try {
        const {userId} = req.params;
        const info = await getInfo(userId);
        return res.status(200).json({info});
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
        const createdInfo = await createInfo(values);
        return res.status(200).json(createdInfo);
    } catch (error) {
        return res.status(500).json({error});       
    }
}

export const updateProfessorInfo = async(req: express.Request, res: express.Response) => {
        try {
            const {userId} = req.params;
            const values: UpdateProfessorInfoDTO = req.body;
    
            if(!values){
                return res.status(400).json('Missing values');
            }
            const updatedInfo = await updateInfo(values, userId);
            return res.status(200).json(updatedInfo);
        } catch (error) {
            return res.status(500).json({error});
        }
}

export const deleteProfessorInfo = async(req: express.Request, res: express.Response)=>{
    try {
        const {userId} = req.params;
        const deletedInfo = await deleteInfo(userId);
        return res.status(200).json(deletedInfo);
    } catch (error) {
        return res.status(500).json({error});        
    }
}
import express from 'express';
import mongoose from 'mongoose';
import { createCurriculum, deleteCurriculum, getCurriculumById,  updateCurriculum, getCurriculums, getCurriculumsByGroup } from '../db/curriculum';
import { CreateCurriculumDTO } from '../dtos/curriculum/CreateCurriculum.dto';
import { UpdateCurriculumDTO } from '../dtos/curriculum/UpdateCurriculum.dto';

export const getGroupCurriculum = async(req: express.Request, res: express.Response)=>{
    try {
        const {group} = req.params;
        const curriculum = await getCurriculumsByGroup(group);
        return res.status(200).json(curriculum);
    } catch (error) {
        return res.status(500).json({error});
    }
}



export const getCurrs = async(req: express.Request, res: express.Response)=>{
    try {
        const curriculum = await getCurriculums();
        return res.status(200).json(curriculum);
    } catch (error) {
        return res.status(500).json({error});
    }
}



export const getCurriculum = async(req: express.Request, res: express.Response)=>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const curriculum = await getCurriculumById(objectId);
        return res.status(200).json(curriculum);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const crCurriculum = async(req:express.Request, res: express.Response) =>{
    try {
        const values: CreateCurriculumDTO = req.body;
        const curriculum = await createCurriculum(values);
        return res.status(200).json(curriculum);
    } catch (error) {
        return res.status(500).json({error});        
    }
}

export const delCurriculum = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const deletedCurr = await deleteCurriculum(objectId);
        return res.status(200).json(deletedCurr);
    } catch (error) {
        return res.status(500).json({error});
    }
}


export const updCurriculum = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const values: UpdateCurriculumDTO = req.body;
        const objectId = new mongoose.Types.ObjectId(id);
        const updCurr = await updateCurriculum(objectId, values);
        return res.status(200).json(updCurr);
    } catch (error) {
        return res.status(500).json({error});
    }
}
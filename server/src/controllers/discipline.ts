import express from "express";
import { createDiscipline, createManyDisciplines, deleteDiscipline, getDisciplineByID, getDisciplineByName, getDisciplines, getProfessorsDisciplines, updateDiscipline } from "../db/discipline";
import mongoose from "mongoose";
import { CreateDisciplineDTO } from "../dtos/discipline/CreateDiscipline.dto";
import { UpdateDisciplineDTO } from "../dtos/discipline/UpdateDiscipline.dto";

export const getDiscipline = async(req: express.Request, res: express.Response)=>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const discipline = await getDisciplineByID(objectId);
        return res.status(200).json(discipline);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getAllDisciplines = async(req: express.Request, res: express.Response)=>{
    try {
        const disciplines = await getDisciplines();
        return res.status(200).json(disciplines);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getDiscipByName = async(req: express.Request, res:express.Response) =>{
    try {
        const {name} = req.params;
        const discipline = await getDisciplineByName(name);
        return res.status(200).json(discipline);
    } catch (error) {
        return res.status(500).json({error});        
    }
}

export const getProfDiscip = async(req: express.Request, res: express.Response) =>{
    try {
        const {professorId} = req.params;
        const objectId = new mongoose.Types.ObjectId(professorId);
        const disciplines = await getProfessorsDisciplines(objectId);
        return res.status(200).json(disciplines);
    } catch (error) {
        return res.status(500).json({error});                
    }
}

export const createDiscip = async (req: express.Request, res: express.Response)=>{
    try {
        const values: CreateDisciplineDTO = req.body;
        const discipline = await createDiscipline(values);
        return res.status(200).json(discipline);
    } catch (error) {
        return res.status(500).json({error});                        
    }
}

export const createManyDiscip = async (req: express.Request, res: express.Response)=>{
    try {
        const values: CreateDisciplineDTO[] = req.body;
        const disciplines = await createManyDisciplines(values);
        return res.status(200).json(disciplines);
    } catch (error) {
        return res.status(500).json({error});                        
    }
}

export const updDiscip = async (req: express.Request, res: express.Response)=>{
    try {
        const values: UpdateDisciplineDTO = req.body;
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const updDiscipline = await updateDiscipline(objectId,values);
        return res.status(200).json(updDiscipline);
    } catch (error) {
        return res.status(500).json({error});                        
    }
}


export const delDiscip = async (req: express.Request, res: express.Response)=>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const delDiscip = await deleteDiscipline(objectId);
        return res.status(200).json(delDiscip);
    } catch (error) {
        return res.status(500).json({error});                        
    }
}
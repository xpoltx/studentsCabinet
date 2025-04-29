import express from 'express';
import mongoose from 'mongoose';
import { createRecordBook, deleteRecordBook, deleteStudentsRecordBook, getDisciplinesRecordBook, getRecord, getStudentsDebts, getStudentsDisciplineRecord, getStudentsRecordBook, updateRecordBook, updateStudentDisciplineRecord, updateStudentRecordBook } from '../db/recordBook';
import { CreateRecordBookDTO } from '../dtos/recordBook/CreateRecordBook.dto';
import { UpdateRecordBookDTO } from '../dtos/recordBook/UpdateRecordBook.dto';


export const getRec = async(req: express.Request, res: express.Response)=>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const record = await getRecord(objectId);
        return res.status(200).json(record);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getStudentsRecords = async(req: express.Request, res: express.Response)=>{
    try {
        const {studentId} = req.params;
        const objectId = new mongoose.Types.ObjectId(studentId);
        const records = await getStudentsRecordBook(objectId);
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getStudentRecord = async(req: express.Request, res: express.Response)=>{
    try {
        const {studentId} = req.params;
        const {disciplineId} = req.params;
        const objectStudentId = new mongoose.Types.ObjectId(studentId);
        const objectDisciplineId = new mongoose.Types.ObjectId(disciplineId);
        const record = await getStudentsDisciplineRecord(objectStudentId, objectDisciplineId);
        return res.status(200).json(record);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getDiscpRecBook = async(req: express.Request, res: express.Response)=>{
    try {
        const {disciplineId} = req.params;
        const objectId = new mongoose.Types.ObjectId(disciplineId);
        const records = await getDisciplinesRecordBook(objectId);
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getDebts = async(req: express.Request, res: express.Response)=>{
    try {
        const {studentId} = req.params;
        const objectId = new mongoose.Types.ObjectId(studentId);
        const records = await getStudentsDebts(objectId);
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const crRecordBook = async(req:express.Request, res: express.Response) =>{
    try {
        const values: CreateRecordBookDTO = req.body;
        const recordBook = await createRecordBook(values);
        return res.status(200).json(recordBook);
    } catch (error) {
        return res.status(500).json({error});        
    }
}

export const delRecordBook = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const deletedRecords = await deleteRecordBook(objectId);
        return res.status(200).json(deletedRecords);
    } catch (error) {
        return res.status(500).json({error});
    }
}


export const updRecordBook = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const values: UpdateRecordBookDTO = req.body;
        const objectId = new mongoose.Types.ObjectId(id);
        const updRecordBook = await updateRecordBook(objectId, values);
        return res.status(200).json(updRecordBook);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const updStudentRecordBook = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const values: UpdateRecordBookDTO = req.body;
        const objectId = new mongoose.Types.ObjectId(id);
        const updRecordBook = await updateStudentRecordBook(objectId, values);
        return res.status(200).json(updRecordBook);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const updStudentDisciplineRecord = async(req: express.Request, res: express.Response) =>{
    try {
        const {studentId} = req.params;
        const {disciplineId} = req.params;
        const values: UpdateRecordBookDTO = req.body;
        const objectStudentId = new mongoose.Types.ObjectId(studentId);
        const objectDisciplineId = new mongoose.Types.ObjectId(disciplineId);
        const updRecordBook = await updateStudentDisciplineRecord(objectStudentId,objectDisciplineId,values);
        if (!updRecordBook) {
            return res.status(404).json({ message: 'Запис не знайдено' });
        }
        return res.status(200).json(updRecordBook);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const delStudentRecordBook = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const deletedRecords = await deleteStudentsRecordBook(objectId);
        return res.status(200).json(deletedRecords);
    } catch (error) {
        return res.status(500).json({error});
    }
}
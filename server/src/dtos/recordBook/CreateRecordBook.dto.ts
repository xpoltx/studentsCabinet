import mongoose from "mongoose";

export interface CreateRecordBookDTO{
    studentId: mongoose.Types.ObjectId,
    disciplineId: mongoose.Types.ObjectId,
    grade: number,
    debt: boolean
}
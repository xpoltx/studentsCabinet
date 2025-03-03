import mongoose from "mongoose";
import { CreateRecordBookDTO } from "../dtos/recordBook/CreateRecordBook.dto";
import { UpdateRecordBookDTO } from "../dtos/recordBook/UpdateRecordBook.dto";

const RecordBookSchema = new mongoose.Schema({
    studentId: {type: mongoose.Types.ObjectId, ref:'User', required: true},
    disciplineId: {type: mongoose.Types.ObjectId, ref: 'Discipline', required: true},
    grade: {type: Number, required: false},
    debt: {type: Boolean, default: true, required: false}
});

export const RecordBookModel = mongoose.model('RecordBook', RecordBookSchema);

export const getRecord = (_id: mongoose.Types.ObjectId) => RecordBookModel.findById(_id);
export const getStudentsRecordBook = (studentId: mongoose.Types.ObjectId) => RecordBookModel.find({studentId});
export const getDisciplinesRecordBook = (disciplineId: mongoose.Types.ObjectId) => RecordBookModel.find({disciplineId});
export const getStudentsDebts = (studentId: mongoose.Types.ObjectId) => RecordBookModel.find({
    studentId,
    debt: true
});

export const createRecordBook = (values: CreateRecordBookDTO) => new RecordBookModel(values).save().then(rb=> rb.toObject()).catch(err=>err.console.log());
export const deleteRecordBook = (_id: mongoose.Types.ObjectId) => RecordBookModel.findByIdAndDelete(_id);
export const updateRecordBook = (_id: mongoose.Types.ObjectId, values: UpdateRecordBookDTO) => RecordBookModel.findByIdAndUpdate({_id},values);
export const deleteStudentsRecordBook = (studentId: mongoose.Types.ObjectId) => RecordBookModel.deleteMany(studentId);
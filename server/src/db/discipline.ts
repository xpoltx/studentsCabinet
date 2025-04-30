import mongoose from 'mongoose';
import { CreateDisciplineDTO } from '../dtos/discipline/CreateDiscipline.dto';
import { UpdateDisciplineDTO } from '../dtos/discipline/UpdateDiscipline.dto';

const DisciplineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    professorId: {type: mongoose.Types.ObjectId, ref:'User', required: true},
    desc: {type: String, require: false, default: "temp description for discipline"},
    course: {type: Number, required: true}
});

export const DisciplineModel = mongoose.model('Discipline', DisciplineSchema);

export const getDisciplines = () => DisciplineModel.find().lean()
export const getDisciplineByID = (_id: mongoose.Types.ObjectId) => DisciplineModel.findById(_id).populate('professorId', '_id fullname');
export const getDisciplineByName = (name: string) => DisciplineModel.findOne({name});
export const getProfessorsDisciplines = (professorId: mongoose.Types.ObjectId) => DisciplineModel.find({professorId});

export const createDiscipline = (values: CreateDisciplineDTO) => new DisciplineModel(values).save().then(discipline => discipline.toObject()).catch(err => console.log(err));
export const updateDiscipline = (_id: mongoose.Types.ObjectId, values: UpdateDisciplineDTO) => DisciplineModel.findByIdAndUpdate(_id, values);
export const deleteDiscipline = (_id: mongoose.Types.ObjectId) => DisciplineModel.findByIdAndDelete(_id);
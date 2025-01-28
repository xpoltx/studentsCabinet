import mongoose from 'mongoose';
import { CreateDisciplineDTO } from '../dtos/discipline/CreateDiscipline.dto';
import { UpdateDisciplineDTO } from '../dtos/discipline/UpdateDiscipline.dto';

const DisciplineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    professorId: {type: mongoose.Types.ObjectId, ref:'User', required: true},
    desc: {type: String, require: false},
    course: {type: Number, required: true}
});

export const DisciplineModel = mongoose.model('Discipline', DisciplineSchema);

export const getDisciplineByID = (_id: string) => DisciplineModel.findById(_id);
export const getDisciplineByName = (name: string) => DisciplineModel.findOne({name});
export const getProfessorsDisciplines = (professorId: string) => DisciplineModel.find({professorId});

export const createDiscipline = (values: CreateDisciplineDTO) => new DisciplineModel(values).save().then(discipline => discipline.toObject()).catch(err => console.log(err));
export const updateDiscipline = (_id: string, values: UpdateDisciplineDTO) => DisciplineModel.findByIdAndUpdate(_id, values);
export const deleteDiscipline = (_id: string) => DisciplineModel.findByIdAndDelete(_id);
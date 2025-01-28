import mongoose from 'mongoose'
import { CreateCurriculumDTO } from '../dtos/curriculum/CreateCurriculum.dto';
import { UpdateCurriculumDTO } from '../dtos/curriculum/UpdateCurriculum.dto';

const CurriculumSchema = new mongoose.Schema({
    semester: {type: Number, enum: [1,2], required: true},
    disciplines:[{
        disciplineId: {type: mongoose.Types.ObjectId, ref: 'Discipline', required: true},
        groups:[{type: String, required: true}],    
        credits: {type: Number, required: true}
    }]
});

export const CurriculumModel = mongoose.model('Curriculum', CurriculumSchema);

export const getCurriculumById = (_id: mongoose.Types.ObjectId) => CurriculumModel.findOne(_id);

export const createCurriculum = (values: CreateCurriculumDTO) => new CurriculumModel(values).save().then(curriculum => curriculum.toObject()).catch(err=>console.log(err));
export const deleteCurriculum = (_id: mongoose.Types.ObjectId) => CurriculumModel.findByIdAndDelete(_id);
export const updateCurriculum = (_id: mongoose.Types.ObjectId, values: UpdateCurriculumDTO) => CurriculumModel.findByIdAndUpdate(_id, values);
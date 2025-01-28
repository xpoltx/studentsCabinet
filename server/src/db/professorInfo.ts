import mongoose from "mongoose";
import { CreateProfessorInfoDTO } from "../dtos/professorInfo/CreateProfessorInfo.dto";
import { UpdateProfessorInfoDTO } from "../dtos/professorInfo/UpdateProfessorInfo.dto";

const ProfessorInfoSchema = new mongoose.Schema({
    userId: {type: String, require: true},
    curator: {type: Boolean, required: false},
    curatedGroup: {type: String, required: false},
});

export const ProfessorInfoModel = mongoose.model('ProfessorInfo', ProfessorInfoSchema);

export const getInfo = (userId: string) => ProfessorInfoModel.findOne({userId});
export const getInfoByGroup = (curatedGroup: string) => ProfessorInfoModel.findOne({curatedGroup});

export const createInfo = (values: CreateProfessorInfoDTO) => new ProfessorInfoModel(values).save().then((info)=>info.toObject()).catch(error=>console.log(error));
export const updateInfo = (values: UpdateProfessorInfoDTO, userId: string) => ProfessorInfoModel.findOneAndUpdate({userId}, values);
export const deleteInfo = (userId: string) => ProfessorInfoModel.findOneAndDelete({userId});

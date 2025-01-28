import mongoose from "mongoose";
import { CreateStudentInfoDTO } from "../dtos/studentInfo/CreateStudentInfo.dto";
import { UpdateStudentDTO } from "../dtos/studentInfo/UpdateStudentInfo.dto";

const StudentInfoSchema = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref:'User', required: true},
    course: {type: Number, required: true},
    group: {type: String, required: true},
    faculty: {type: String, required: true},
    studyForm: {type: String, required: true},
    payment: {type: String, enum:['budget', 'contract'], default: 'budget'}
});

export const StudentInfoModel = mongoose.model('StudentInfo', StudentInfoSchema);

export const getStudentsInfo = (userId:string) => StudentInfoModel.findOne({userId});
export const getGroupList = (group: string) => StudentInfoModel.find({group}).select(['userId', 'group']);

export const createStudentInfo = (values: CreateStudentInfoDTO) => new StudentInfoModel(values).save().then((studentInfo)=> studentInfo.toObject())
export const updateStudentInfo = (userId: string, values: UpdateStudentDTO) => StudentInfoModel.findOneAndUpdate({userId}, values);
export const deleteStudentInfo = (_id: string) => StudentInfoModel.findByIdAndDelete(_id);

import { Types } from "mongoose";

export interface CreateStudentInfoDTO{
    userId: Types.ObjectId,
    course: number,
    group: string,
    faculty: string,
    studyForm: string,
    payment: string   
}
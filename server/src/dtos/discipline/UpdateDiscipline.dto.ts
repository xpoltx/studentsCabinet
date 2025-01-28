import { Types } from "mongoose";

export interface UpdateDisciplineDTO {
    name?: string,
    professorId?: Types.ObjectId,
    disc?: string,
    course?: number
}
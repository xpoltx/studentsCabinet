import { Types } from "mongoose";

export interface CreateDisciplineDTO {
    name: string,
    professorId: Types.ObjectId,
    disc?: string,
    course: number
}
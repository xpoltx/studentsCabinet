import { Types } from "mongoose";

export interface DisciplineDTO{
    disciplineId: Types.ObjectId,
    groups: string[],
    credits: number
}
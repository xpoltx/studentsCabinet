import { Types } from "mongoose";

export interface UPDDisciplineDTO{
    disciplineId?: Types.ObjectId,
    groups?: string[],
    credits?: number
}
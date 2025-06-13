import { Types } from "mongoose";

export interface UPDDisciplineDTO{
    disciplineId?: Types.ObjectId,
    groups?: string[],
    credits?: number
    schedule?: {
        weekday: 'MO' | 'TU' | 'WE' | 'TH' | 'FR',
        startTime: string,
        count: number,
        duration: number,
        interval: number
    }
}
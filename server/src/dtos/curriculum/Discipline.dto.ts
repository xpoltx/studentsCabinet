import { Types } from "mongoose";

export interface DisciplineDTO{
    disciplineId: Types.ObjectId,
    groups: string[],
    credits: number,
    schedule: {
        weekday: Array<'MO' | 'TU' | 'WE' | 'TH' | 'FR'>,
        startTime: string,
        count?: number,
        duration?: number,
        interval?: number
    }
}
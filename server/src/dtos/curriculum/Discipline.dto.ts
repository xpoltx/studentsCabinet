import { Types } from "mongoose";

export interface DisciplineDTO{
    disciplineId: Types.ObjectId,
    groups: string[],
    credits: number,
    schedule: {
        day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri',
        startTime: string,
        endTime: string
    }
}
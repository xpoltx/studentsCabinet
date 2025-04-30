import { Types } from "mongoose";

export interface UPDDisciplineDTO{
    disciplineId?: Types.ObjectId,
    groups?: string[],
    credits?: number
    schedule?: {
        day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri',
        startTime: string,
        endTime: string
    }
}
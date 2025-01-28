import { Types } from "mongoose";

export interface CreateProfessorInfoDTO {
    userId: Types.ObjectId,
    curator: boolean,
    curatedGroup: string
}
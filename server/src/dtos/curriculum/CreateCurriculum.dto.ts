import { Types } from "mongoose";
import { DisciplineDTO } from "./Discipline.dto";

export interface CreateCurriculumDTO{
    semester: number,
    disciplines: DisciplineDTO[]
}
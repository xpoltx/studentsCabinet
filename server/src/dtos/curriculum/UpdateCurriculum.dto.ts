import { DisciplineDTO } from "./Discipline.dto";

export interface UpdateCurriculumDTO{
    semester?: number,
    disciplines?: DisciplineDTO[]
}
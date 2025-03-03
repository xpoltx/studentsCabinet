import { UPDDisciplineDTO } from "./UPDDiscipline.dto";

export interface UpdateCurriculumDTO{
    semester?: number,
    disciplines?: UPDDisciplineDTO[]
}
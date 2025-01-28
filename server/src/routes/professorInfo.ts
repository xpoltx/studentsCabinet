import {Router} from "express";
import { createProfessorInfo, deleteProfessorInfo, getCuratorGroup, getProfessorInfo, updateProfessorInfo } from "../controllers/professorInfo";


export default (router: Router)=>{
    router.get("/professor/:professorId", getProfessorInfo);
    router.get("/curator/:group", getCuratorGroup);
    router.post("/profesor/create/", createProfessorInfo);
    router.patch("/professor/update/:userId", updateProfessorInfo);
    router.delete("/professor/delete/:userId", deleteProfessorInfo);
}
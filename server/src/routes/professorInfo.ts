import {Router} from "express";
import { createProfessorInfo, deleteProfessorInfo, getCuratorGroup, getProfessorInfo, updateProfessorInfo } from "../controllers/professorInfo";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";


export default (router: Router)=>{
    router.get("/professor/:professorId",isAuthenticated, getProfessorInfo);
    router.get("/curator/:group",isAuthenticated, getCuratorGroup);
    router.post("/profesor/create",isAuthenticated, isProfessor, createProfessorInfo);
    router.patch("/professor/update/:userId",isAuthenticated, isProfessor, updateProfessorInfo);
    router.delete("/professor/delete/:userId",isAuthenticated, isProfessor, deleteProfessorInfo);
}
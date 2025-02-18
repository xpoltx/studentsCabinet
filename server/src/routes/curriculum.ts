import { Router } from "express";
import { crCurriculum, delCurriculum, getCurriculum, updCurriculum } from "../controllers/curriculum";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";


export default (router: Router)=>{
    router.post('/curriculum/create',isAuthenticated,isProfessor, crCurriculum),
    router.get('/curriclum/:id',isAuthenticated, getCurriculum),
    router.patch('/curriculum/upd/:id',isAuthenticated,isProfessor, updCurriculum),
    router.delete('/curriculum/del/:id',isAuthenticated,isProfessor, delCurriculum)
}
import { Router } from "express";
import { crCurriculum, delCurriculum, getCurriculum,  getCurrs,  getGroupCurriculum,  updCurriculum } from "../controllers/curriculum";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";


export default (router: Router)=>{
    router.post('/curriculum/create',isAuthenticated,isProfessor, crCurriculum),
    router.get('/curriculum/:id',isAuthenticated, getCurriculum),
    router.get('/curriculums',isAuthenticated, getCurrs),
    router.get('/:group/curriculum',isAuthenticated, getGroupCurriculum),
    router.patch('/curriculum/upd/:id',isAuthenticated,isProfessor, updCurriculum),
    router.delete('/curriculum/del/:id',isAuthenticated,isProfessor, delCurriculum)
}
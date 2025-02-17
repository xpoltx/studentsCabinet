import { Router } from "express";
import { crCurriculum, delCurriculum, getCurriculum, updCurriculum } from "../controllers/curriculum";

export default (router: Router)=>{
    router.post('/curriculum/create', crCurriculum),
    router.get('/curriclum/:id', getCurriculum),
    router.patch('/curriculum/upd/:id', updCurriculum),
    router.delete('/curriculum/del/:id', delCurriculum)
}
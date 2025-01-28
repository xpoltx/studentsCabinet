import {Router} from "express";
import { createInfo, deleteInfo, getGroup, getStInfo, updateInfo } from "../controllers/studentInfo";


export default (router: Router)=>{
    router.get('/student/:studentId', getStInfo);
    router.get('/group/:groupName', getGroup);
    router.post('/student/create', createInfo);
    router.patch('/student/update/:userId', updateInfo);
    router.delete('/student/delete/:userId', deleteInfo);
}
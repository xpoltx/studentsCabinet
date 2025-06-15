import {Router} from "express";
import { createGroup, createInfo, deleteInfo, getGroup, getStInfo, updateInfo } from "../controllers/studentInfo";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";


export default (router: Router)=>{
    router.get('/student/:studentId',isAuthenticated, getStInfo);
    router.get('/group/:groupName',isAuthenticated, getGroup);
    router.post('/student/create',isAuthenticated, isProfessor, createInfo);
    router.post('/group/create',isAuthenticated,isProfessor,createGroup);
    router.patch('/student/update/:userId',isAuthenticated, isProfessor, updateInfo);
    router.delete('/student/delete/:userId',isAuthenticated, isProfessor, deleteInfo);
}
import {Router} from "express";
import { delUser, getAllUsers, getUsersByRoles, updUser } from "../controllers/users";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";

export default (router: Router)=>{
    router.get('/users',isAuthenticated, isProfessor, getAllUsers);
    router.get('/users/role/:role',isAuthenticated, isProfessor, getUsersByRoles);
    router.patch('/user/upd/:email',isAuthenticated, isProfessor,  updUser);
    router.delete('/user/del/:id',isAuthenticated, isProfessor, delUser);
 
}
import {Router} from "express";
import { login, registration } from "../controllers/auth";

export default (router: Router)=>{
    router.post('/login', login);
    router.post('/reg', registration);
}
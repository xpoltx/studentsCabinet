import {Router} from "express";
import { confirmAccount, login, loginUUID, logout, qrCode, registerMany, registration } from "../controllers/auth";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";

export default (router: Router)=>{
    router.post('/login', login);
    router.post('/reg', registration);
    router.post('/reg/many',isAuthenticated,isProfessor, registerMany);
    router.post('/logout', isAuthenticated, logout);
    router.get('/qr-code',isAuthenticated, qrCode);
    router.post('/login/qr-code', loginUUID);
    router.post('/confirm-account', confirmAccount);
}
import {Router} from "express";
import { login, loginUUID, qrCode, registration } from "../controllers/auth";
import { isAuthenticated } from "../middleware/userStatus";

export default (router: Router)=>{
    router.post('/login', login);
    router.post('/reg', registration);
    router.get('/qr-code', isAuthenticated, qrCode);
    router.post('/login/qr-code', loginUUID);
}
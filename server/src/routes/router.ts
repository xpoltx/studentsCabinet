import express from "express";
import auth from "./auth";
import studentInfo from "./studentInfo";
import professorInfo from "./professorInfo";
import discipline from "./discipline";
import curriculum from "./curriculum";
import recordBook from "./recordBook";
import user from "./user";


const router = express.Router();

export default (): express.Router =>{
    auth(router);
    user(router);
    studentInfo(router);
    professorInfo(router);
    discipline(router);
    curriculum(router);
    recordBook(router);
    return router;
}
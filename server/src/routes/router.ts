import express from "express";
import auth from "./auth";
import studentInfo from "./studentInfo";
import professorInfo from "./professorInfo";
import discipline from "./discipline";
import curriculum from "./curriculum";
import recordBook from "./recordBook";


const router = express.Router();

export default (): express.Router =>{
    auth(router);
    studentInfo(router);
    professorInfo(router);
    discipline(router);
    curriculum(router);
    recordBook(router);
    return router;
}
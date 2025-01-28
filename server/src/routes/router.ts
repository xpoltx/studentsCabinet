import express from "express";
import auth from "./auth";
import studentInfo from "./studentInfo";
import professorInfo from "./professorInfo";


const router = express.Router();

export default (): express.Router =>{
    auth(router);
    studentInfo(router);
    professorInfo(router);
    return router;
}
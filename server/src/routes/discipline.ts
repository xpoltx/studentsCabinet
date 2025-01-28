import { Router } from "express";
import { createDiscip, delDiscip, getDiscipByName, getDiscipline, getProfDiscip, updDiscip } from "../controllers/discipline";

export default (router: Router)=>{
    router.post('/discipline/create', createDiscip),
    router.get('/discipline/:id', getDiscipline),
    router.get('/discipline/:name', getDiscipByName),
    router.get('/disciplines/professor/:professorId', getProfDiscip),
    router.patch('/discipline/upd/:id', updDiscip),
    router.delete('/discipline/del/:id', delDiscip)
};
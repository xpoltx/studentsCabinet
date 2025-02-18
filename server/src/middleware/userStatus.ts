import express from 'express';
import { getUserBySessionToken } from '../db/user';
import {get, identity, merge} from 'lodash';


export const isAuthenticated = async(req: express.Request, res: express.Response, next: express.NextFunction)=>{
    try {
        const sessionToken = req.cookies['User-auth'];
        if(!sessionToken){
            return res.status(400).json({error: "Cookies not found"});
        }
        const existingUser= await getUserBySessionToken(sessionToken);
        if(!existingUser){
            return res.status(400).json({error:"User doesnt exist"});
        }
        merge(req, {identity: existingUser});
        next();
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const isProfessor = async(req: express.Request, res: express.Response, next: express.NextFunction)=>{
    try {
        const prof = 'professor';
        const currentRole = get(req, 'identity.role') as string | undefined;
        if(!currentRole || currentRole !== prof){
            return res.status(400).json({error: "Access denied. User is not professor"});
        }
        next();
    } catch (error) {
        return res.status(500).json({error});
    }
}
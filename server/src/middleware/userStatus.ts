import express from 'express';
import { getUserById, getUserBySessionToken, UserModel } from '../db/user';
import { get, identity, merge } from 'lodash';
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

interface TokenInterface {
    userId: string;
    iat: number;
    exp: number;
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // const authHeader = req.headers.authorization;
        // if (!authHeader || !authHeader.startsWith('Bearer ')) {
        //     return res.status(401).json({ error: 'Unauthorized access, token not provided' });
        // }

        // const token = authHeader.split(' ')[1];
        const token = req.cookies['User-jwt'];
        if (!token) {
            return res.status(400).json({ error: "Cookies not found" });
        }

        const secret = process.env.SECRET_KEY as string;
        const decoded = jwt.verify(token, secret) as TokenInterface;
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - no token provided" });
        }
        const user = await getUserById((new mongoose.Types.ObjectId(decoded.userId)));

        if (!user) {
            return res.status(401).json({ error: "Unauthorized - user not found" });
        }

        merge(req, { identity: user });

        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// export const isAuthenticated = async(req: express.Request, res: express.Response, next: express.NextFunction)=>{
//     try {
//         const sessionToken = req.cookies['User-session'];
//         if(!sessionToken){
//             return res.status(400).json({error: "Cookies not found"});
//         }
//         const existingUser= await getUserBySessionToken(sessionToken);
//         if(!existingUser){
//             return res.status(400).json({error:"User doesnt exist"});
//         }
//         merge(req, {identity: existingUser});
//         next();
//     } catch (error) {
//         return res.status(500).json({error});
//     }
// }

export const isProfessor = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const prof = 'professor';
        const currentRole = get(req, 'identity.role') as string | undefined;
        if (!currentRole || currentRole !== prof) {
            return res.status(400).json({ error: "Access denied. User is not professor" });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error });
    }
}
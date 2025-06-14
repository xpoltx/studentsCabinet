import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const generateTokenAndSetCookie = (userId: string, res: express.Response)=>{
    const secret = process.env.SECRET_KEY as string;
    const token = jwt.sign({userId}, secret, {
        expiresIn: "2d"
    });

    res.cookie("User-jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true    
    });

};

export default generateTokenAndSetCookie;
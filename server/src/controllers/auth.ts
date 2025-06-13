import express from "express";
import { CreateUserDTO } from "../dtos/user/CreateUser.dto";
import { createManyUsers, createUser, findEmails, getUserByConfirmToken, getUserByEmail, getUserBySessionToken, getUserByUUID, UserModel } from "../db/user";
import bcrypt from 'bcrypt'
import { LoginUserDTO } from "../dtos/user/LoginUser.dto";
import { AES } from "crypto-ts";
import genUUID from "../utils/genUUID";
import dotenv from "dotenv"
import { get } from "lodash";
import generateQRcode from "../utils/genQRcode";
import { sendConfirmMail } from "../utils/sendConfirmMail";
import generateTokenAndSetCookie from "../utils/genJWT";

dotenv.config()

export const registration = async (req: express.Request, res: express.Response) => {
    try {
        const values: CreateUserDTO = req.body;
        const existingUser = await getUserByEmail(values.email);
        if (existingUser) {
            return res.status(201).json({ err: "User with this email already exist" });
        }
        const encryptedPassword = (await bcrypt.hash(values.password, 10)).toString();
        values.password = encryptedPassword;
        values.confirmToken = genUUID()
        values.profilePic = `https://avatar.iran.liara.run/public/boy?username=${values.fullname.replace(' ', '_')}`;
        const regUser = await createUser(values);
        if (!regUser) {
            return res.status(400).json({ err: "Registration failed" });
        }
        await sendConfirmMail(values.email, values.confirmToken);
        const { password, ...newUserData } = regUser;
        return res.status(200).json(newUserData);
    } catch (error) {
        return res.status(500).json({ error });
    }

};

export const registerMany = async (req: express.Request, res: express.Response) => {
    try {
        const users: CreateUserDTO[] = req.body;
        if (users.length === 0) {
            return res.status(400).json({ error: 'No Users provided to register' });
        }
        const emails = users.map(user => user.email);
        const existingUsers = await findEmails(emails)

        const newUsers = users.filter(user => !existingUsers.includes(user.email));

        if (newUsers.length === 0) {
            return res.status(400).json({ error: 'All users already exist' });
        }

        const regUsers = await Promise.all(newUsers.map(async (user) => {
            const encryptedPassword = (await bcrypt.hash(user.password, 10)).toString();
            const confirmToken = genUUID();
            return {
                ...user,
                password: encryptedPassword,
                confirmToken,
                profilePic: `https://avatar.iran.liara.run/public/boy?username=${user.fullname.replace(' ', '_')}`,
            }
        }));

        const createdUsers = await createManyUsers(regUsers);

        for (const user of regUsers) {
            await sendConfirmMail(user.email, user.confirmToken);
        }

        return res.status(200).json({
            skipped: existingUsers,
            created: createdUsers
        });


    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const values: LoginUserDTO = req.body;

        const existingUser = await getUserByEmail(values.email).select('password role fullname profilePic');
        if (!existingUser) {
            return res.status(400).json({ error: "User doesnt exist" });
        }

        if (!await bcrypt.compare(values.password, existingUser.password!)) {
            return res.status(400).json({ error: "Wrong password" });
        }
        existingUser.sessionToken = AES.encrypt(existingUser.fullname, process.env.SECRET_KEY!).toString();
        existingUser.uuid = genUUID();
        await existingUser.save();

        generateTokenAndSetCookie(existingUser._id.toString(), res);

        const { password, ...userData } = existingUser.toObject();
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const logout = async (req: express.Request, res: express.Response) => {
    try {
        // const sessionToken = req.cookies['User-session'];
        // if (!sessionToken) {
        //     return res.status(400).json({ error: "No active session found" });
        // }

        // const user = await getUserBySessionToken(sessionToken);
        // if (!user) {
        //     return res.status(400).json({ error: "Invalid session token" });
        // }

        // user.sessionToken = undefined;
        // await user.save();

        // res.clearCookie('User-session', { path: '/' });
        // res.cookie('User-session', '', {maxAge: 0});

        res.cookie('User-jwt', '', { maxAge: 0 });

        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const qrCode = async (req: express.Request, res: express.Response) => {
    try {
        const userEmail = get(req, 'identity.email') as string | undefined;
        const existingUser = await getUserByEmail(userEmail!);
        if (!existingUser) {
            return res.status(400).json({ error: "User doesnt exist" });
        }
        const uuid = genUUID();
        existingUser.uuid = uuid;
        await existingUser.save();
        const qr = await generateQRcode(existingUser.uuid);
        return res.status(200).send(`<img src="${qr}" alt="qr code" />`);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const loginUUID = async (req: express.Request, res: express.Response) => {
    try {
        const { uuid } = req.body;
        if (!uuid) {
            return res.status(400).json({ error: "Invalid UUID" });
        }
        const existingUser = await getUserByUUID(uuid);
        if (!existingUser) {
            return res.status(400).json({ error: "User doesnt exist" });
        }
        existingUser.uuid = undefined;
        await existingUser.save();
        return res.status(200).json({ message: "Auth successful", existingUser });
    } catch (error) {
        return res.status(500).json({ error });
    }
}


export const confirmAccount = async (req: express.Request, res: express.Response) => {
    try {
        const { inputToken } = req.body;
        if (!inputToken) {
            return res.status(400).json({ error: "Empty input token field" });
        }
        const existingUser = await getUserByConfirmToken(inputToken);
        if (!existingUser) {
            return res.status(400).json({ error: "Wrong confirm token. Try again!" });
        }
        existingUser.confirmed = true;
        existingUser.confirmToken = undefined;
        await existingUser.save();
        return res.status(200).json({ message: "Account confirmed successfully" });
    } catch (error) {
        return res.status(500).json({ error });
    }
}
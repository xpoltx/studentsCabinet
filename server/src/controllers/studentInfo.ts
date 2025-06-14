import express from "express";
import { createManyStudentInfo, createStudentInfo, deleteStudentInfo, getGroupList, getStudentsInfo, updateStudentInfo } from "../db/studentInfo";
import { UserModel } from "../db/user";
import { CreateStudentInfoDTO } from "../dtos/studentInfo/CreateStudentInfo.dto";
import { UpdateStudentDTO } from "../dtos/studentInfo/UpdateStudentInfo.dto";
import mongoose from "mongoose";

export const getStInfo = async (req: express.Request, res: express.Response) => {
    try {
        const { studentId } = req.params;
        const objectId = new mongoose.Types.ObjectId(studentId);
        const studentInfo = await getStudentsInfo(objectId);

        return res.status(200).json(studentInfo);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const getGroup = async (req: express.Request, res: express.Response) => {
    try {
        const { groupName } = req.params;
        const group = await getGroupList(groupName);

        const studentsData = await Promise.all(
            group.map(async (user) => {
                const student = await UserModel.findById(user.userId).select('fullname');
                return {
                    userId: user.userId,
                    group: user.group,
                    fullname: student?.fullname,
                };
            })
        );

        const groupList = {
            group: groupName,
            students: studentsData,
        }

        return res.status(200).json(groupList);

    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const createInfo = async (req: express.Request, res: express.Response) => {
    try {
        const values: CreateStudentInfoDTO = req.body;
        const createdInfo = await createStudentInfo(values);
        return res.status(200).json(createdInfo);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const createGroup = async (req: express.Request, res: express.Response) => {
    try {
        const values: CreateStudentInfoDTO[] = req.body;
        if(!values || values.length === 0 ){
            return res.status(400).json('Missing values');
        }
        const createdGroup = await createManyStudentInfo(values);
        return res.status(200).json(createdGroup);
    } catch (error) {
        return res.status(500).json({ error });
    }

}

export const updateInfo = async (req: express.Request, res: express.Response) => {
    try {
        const { userId } = req.params;
        const objectId = new mongoose.Types.ObjectId(userId);
        const values: UpdateStudentDTO = req.body;

        if (!values) {
            return res.status(400).json('Missing values');
        }
        const updatedInfo = await updateStudentInfo(objectId, values);
        return res.status(200).json(updatedInfo);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const deleteInfo = async (req: express.Request, res: express.Response) => {
    try {
        const { userId } = req.params;
        const objectId = new mongoose.Types.ObjectId(userId);
        const deletedInfo = await deleteStudentInfo(objectId);
        return res.status(200).json(deletedInfo);
    } catch (error) {
        return res.status(500).json({ error });
    }
}
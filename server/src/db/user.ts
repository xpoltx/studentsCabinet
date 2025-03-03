import mongoose from "mongoose";
import { CreateUserDTO } from "../dtos/user/CreateUser.dto";
import { UpdateUserDTO } from "../dtos/user/UpdateUser.dto";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, select: false},
    sessionToken: {type: String, select: false},
    uuid: {type: String, required: false},
    role:{ type: String, required: false, enum:["professor", "student"], default: "student"},
    profilePic:{type: String, default: ""},
    confirmed:{type: Boolean, default: "false"},
    confirmToken: {type: String}
});

export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUsersByRole = (role:string) => UserModel.find({role});
export const getUserByEmail = (email: string) => UserModel.findOne({email});
export const getUserById = (id: mongoose.Types.ObjectId) => UserModel.findById({_id: id});

export const getUserBySessionToken = (sessionToken: string)=> UserModel.findOne({sessionToken})
export const getUserByUUID = (uuid: string) => UserModel.findOne({uuid});
export const getUserByConfirmToken = (confirmToken: string) => UserModel.findOne({confirmToken});

export const createUser = (values: CreateUserDTO) => new UserModel(values).save().then((user)=>user.toObject()).catch(err => console.log(err));
export const updateUser = (email: string, values: UpdateUserDTO) => UserModel.findOneAndUpdate({email}, values, {new:true});
export const deleteUser = (id: mongoose.Types.ObjectId) => UserModel.findByIdAndDelete({_id: id});

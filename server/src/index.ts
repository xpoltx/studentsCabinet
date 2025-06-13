import express, { Request, Response }  from "express";
import path from "path"
import dotenv from "dotenv";
import mongoose, { Error } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.ORIGIN!,
    credentials: true
}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})


app.use('/', router());

mongoose.connect(process.env.DATABASE!, {autoIndex: false}).then(()=>{
    console.log("Connected successfully");
});
mongoose.connection.on('error', (error: Error) => console.log(error));

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
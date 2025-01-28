import express, { Request, Response }  from "express";

import dotenv from "dotenv";
import mongoose, { Error } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routes/router";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());


app.use('/', router());

mongoose.connect(process.env.DATABASE!).then(()=>{
    console.log("Connected successfully");
});
mongoose.connection.on('error', (error: Error) => console.log(error));

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
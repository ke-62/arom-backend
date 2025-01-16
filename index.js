import express from "express";
import UserRouter from "./router/user.js";
import mongoose from 'mongoose';
import AuthRouter from "./router/auth.js";

const app=new express();

app.use(express.json());
app.use("/user",UserRouter);
app.use("/auth",AuthRouter);

mongoose.connect("");

app.listen(3000,()=>{
    console.log("서버 실행됨")
})
import express from "express";
import UserRouter from "./router/user.js";
import mongoose from 'mongoose';
import AuthRouter from "./router/auth.js";

const app=new express();

app.use(express.json());
app.use("/user",UserRouter);
app.use("/auth",AuthRouter);

mongoose.connect("mongodb+srv://goeun79624:7btob1004%21@cluster0.skn21.mongodb.net/Arom?retryWrites=true&w=majority");

app.listen(3000,()=>{
    console.log("서버 실행됨")
})
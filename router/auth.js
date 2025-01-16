import {Router} from "express";
import {UserModel} from "../schema/user.js";
import jwt from "jsonwebtoken";

const AuthRouter = Router();

AuthRouter.post("/login",async(req,res)=>{
    const data = req.body;
    const user= await UserModel.findOne({id: data.id});
    if(!user){
        res.send("사용자를 찾을 수 없습니다.");
    }
    if(user.password !== data.password){
        res.send("비밀번호가 틀립니다.")
    }
    const token=jwt.sign(
        {
            type:"JWT",
            id: user.id
        },
        "1234qwer",
        {
            expiresIn:"30m",
            issuer:"Arom",
        }
    );
    res.send(token);
});

export default AuthRouter;
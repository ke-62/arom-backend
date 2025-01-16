import {Router} from 'express';
import { UserModel } from '../schema/user.js';
import jwt from "jsonwebtoken";
import AuthMiddleware from '../middleware/auth.js';

const UserRouter = Router();

UserRouter.post("/",async(req,res)=>{
    const data={
        id:req.body.id,
        password:req.body.password,
    }

    const result=await UserModel.create(data);
    res.json(result);
})

UserRouter.get('/:id',AuthMiddleware,async (req,res)=>{
   const user= await UserModel.findOne({id:req.params.id});
   if(!user){
    return res.send("유저를 찾을 수 없습니다!")
   }
   if(user.id!==req.decoded.id){
    return res.send("권한이 없습니다!")
   }
   res.json(user);

})

UserRouter.patch('/:id',async (req,res)=>{ //수정
   const result= await UserModel.findByIdAndUpdate(req.params.id,req.body);
    res.json(result);
})

UserRouter.delete('/:id',async (req,res)=>{ //삭제
   const result= await UserModel.findByIdAndDelete(req.params.id);
   res.json(result);
})

export default UserRouter;
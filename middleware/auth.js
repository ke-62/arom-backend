import jwt from "jsonwebtoken";

const AuthMiddleware=(req,res,next)=>{
    const token = req.headers.authorization;
    try{
        const decoded =jwt.verify(token,"1234qwer");
        req.decoded=decoded;
        return next();
    } catch{
        res.send("올바르지 못한 요청입니다.");
    }
}

export default AuthMiddleware;
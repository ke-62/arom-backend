import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    id:{type:String, required: true,unique:true},
    password:{type:String, required:true}
})

const UserModel = mongoose.model("User",UserSchema);

export{UserModel,UserSchema}
import { model, models, Schema, Types } from "mongoose";

export interface UserI {
    clerkId:string;
    FirstName:string;
    Email:string;
    ChatSessions?:Types.ObjectId[];
    createdAt:Date;
    updatedAt:Date;
}

const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    FirstName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    ChatSessions:[{
        type:Schema.ObjectId,
        ref:"ChatSession"
    }]
},{timestamps:true})


export default models.User || model<UserI>("User",UserSchema);
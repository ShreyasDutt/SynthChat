import { model, models, Schema, Types } from "mongoose";


export interface MessageI {
    chatSessionId: Types.ObjectId;
    role: 'user' | 'ai';
    content:string;
    createdAt?:Date;
}


const messageSchema = new Schema({
    chatSessionId:{
        type:Schema.ObjectId,
        ref:"ChatSession",
        required:true
    },
    role:{
        type:String,
        enum:["user","ai"],
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:{createdAt:true,updatedAt:false}})

const Message = models.messages || model<MessageI>("messages",messageSchema);
export default Message;
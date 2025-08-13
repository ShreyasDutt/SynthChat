import { model, models, Schema, Types } from "mongoose";

export interface ChatSessionI {
    title: string;
    userId: Types.ObjectId;
    messages?: Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
    chatsummary?:string;
}

const ChatSessionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    userId: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    },
    messages:[{
        type:Schema.ObjectId,
        ref:"Message"
    }],
    chatsummary:{
        type:String
    }
},{timestamps:true})


const ChatSession = models.ChatSession || model<ChatSessionI>("ChatSession",ChatSessionSchema);
export default ChatSession;
import { error } from "console";
import mongoose from "mongoose";
const URI = process.env.DB_URI;

export const dbConnect = async() =>{
    if (!URI) return error('DB URI not found');
    if(mongoose.connection.readyState >= 1) return console.log("DB Already Connected");
    try {
        await mongoose.connect(URI);
        console.log("DB Connected")
    } catch (error) {
        console.error(error);
        throw error;
    }
}


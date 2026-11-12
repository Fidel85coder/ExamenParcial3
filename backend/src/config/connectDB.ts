import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/exam_db';
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (e) {
        console.error("Error connecting to DB: ", e);
        process.exit(1);
    }
};
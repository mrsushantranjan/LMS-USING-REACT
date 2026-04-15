import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    try {
        await mongoose.connection.collection('users').dropIndex('clerkId_1');
        console.log("SUCCESS: Index dropped");
    } catch (e) {
        console.log("ERROR:", e.message);
    }
    process.exit();
});

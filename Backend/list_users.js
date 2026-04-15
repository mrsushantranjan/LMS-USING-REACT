import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    try {
        const users = await mongoose.connection.collection('users').find({}).toArray();
        console.log("Users in DB:");
        users.forEach(u => console.log(`Email: ${u.email} | Role: ${u.role || 'undefined'}`));
    } catch (e) {
        console.log("ERROR:", e.message);
    }
    process.exit();
});

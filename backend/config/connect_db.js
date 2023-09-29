import mongoose from "mongoose";

async function connectToMongoDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB".blue.bold);
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err.message.red.bold);
    }
}

export { connectToMongoDB };
import mongoose from "mongoose";

async function connectToMongoDB() {
    return mongoose.connect(process.env.MONGO_URI);
}

export { connectToMongoDB };
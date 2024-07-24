import mongoose from "mongoose";

export async function createDbConfig() {
    try{
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection =  mongoose.connection
        connection.on("connected", async () => {
            console.log("Connected successfully!");
        })
        connection.on("error", (err) => {
            console.error(err);
            process.exit(1);
        })
    }
    catch(err){
        console.error(err);
    }
}
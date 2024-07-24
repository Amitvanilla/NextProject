import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        unique: true
    },
    isActive:{
        type: Boolean,
        default: false
    },
    token:{
        type: String,
    },
    tokenExpiration:{
        type: Date,
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
})

const user = mongoose.models.user || mongoose.model("user", userSchema)

export default user;
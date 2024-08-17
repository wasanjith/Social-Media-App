import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    // member since August 2024 createdAt
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId, // 16 characters
            ref: "User", // reference to the User model
            default: []
        }
    ],    
    following: [
        {
            type: mongoose.Schema.Types.ObjectId, // 16 characters
            ref: "User", // reference to the User model
            default: []
        }
    ],

    profileImg: {
        type: String,
        default: "",
    },

    coverImg:{
        type: String,
        default: "",
    },
    bio:{
        type: String,
        default: "",
    },

    link:{
        type: String,
        default: "",
    },

    
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;


// import mongoose
const mongoose = require("mongoose");

// create a user schema using mongoose
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

// create a user model
const User = mongoose.model("User", userSchema)

// export the user model
module.exports = User
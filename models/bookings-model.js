// import mongoose
const mongoose = require("mongoose")

// define an ObjectId to give us access to MongoDB's unique generated ID type
const ObjectId = mongoose.Schema.Types.ObjectId

// create a booking schema
const bookingSchema = new mongoose.Schema(
    {
        user: {
            // to refer to another data type that we've created in our MongoDB database, utilize both the ObjectId type and a reference (ref) to the specific model we want
            type: ObjectId,
            ref: "User",
            required: true
        },
        event: {
            // to refer to another data type that we've created in our MongoDB database, utilize both the ObjectId type and a reference (ref) to the specific model we want
            type: ObjectId,
            ref: "Event",
            required: true
        },
        quantity: {
            type: Number,
            min: 1,
            required: true
        },
        totalPrice: {
            type: Number
        },
        status: {
            type: String,
            default: "confirmed"
        }
    },
    {
        timestamps: true
    }
)

// create a booking model
const Booking = mongoose.model("Booking", bookingSchema)

// export the booking model
module.exports = Booking
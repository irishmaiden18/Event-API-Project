// import mongoose
const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: ""
        },
        date: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        category: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: 0,
            min: 0
        },
        availableTicketes: {
            type: Number,
            default: 100,
            min: 0
        },
    },
    {
        timestamps: true
    }
)

// create an event model
const Event = mongoose.model("Event", eventSchema)

// export the event model
module.exports = Event
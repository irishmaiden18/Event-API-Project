// import express
const express = require("express")

// set up the router
const router = express.Router()

// import controller functionality
const { createBooking } = require("../controllers/bookings-controller")

// handle all POST routes at /api/v1/bookings
// anything that has to do with our database needs async/await
router.post("/", async (req, res) => {

    try {

        // call createBooking booking controller function to make a new booking
        const booking = await createBooking(req.body)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: booking
        })
        
    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// export the router
module.exports = router
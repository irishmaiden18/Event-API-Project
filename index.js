// npm init -y
// npm i express morgan mongoose dotenv

// import express
const express = require('express');

// set up the express app
const app = express();

// import morgan
const logger = require("morgan");

// set up middleware

// set up morgan
app.use(logger("dev"))

// format our express body
app.use(express.json())

// connect to MongoDB
const connectToMongoDB = require("./database/connectToMongoDB")

// import and use the user router
const usersRouter = require("./routes/users-router")
app.use("/api/v1/users", usersRouter)

// import and use the event router
const eventsRouter = require("./routes/events-router")
app.use("/api/v1/events", eventsRouter)

// import and use the bookings router
const bookingsRouter = require("./routes/bookings-router")
app.use("/api/v1/bookings", bookingsRouter)

/* still work on: stretch goals
- when returning bookings, populate the event and user fields with the proper information
- add a route in users router that will return all of the events booked by a single user (like movies and reviews)
- add an update route for booking specifically designed to cancel their attendance
*/

// set up the port
const PORT = 3000;

// start listening
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)

    // call the connectToMongoDB function
    connectToMongoDB()
})
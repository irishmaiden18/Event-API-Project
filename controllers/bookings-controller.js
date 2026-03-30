// import the model
const Booking = require("../models/bookings-model")

//import the events controller functionality
const { getEventById, updateEvent } = require("./events-controller")

// write a function to create a booking from given booking data
// anything that has to do with our database requires async/await
const createBooking = async (bookingData) => {

    try {

        // create booking
        // 1. calculate total price
        // totalPrice = eventPrice * quanitity
        // event - eventPrice (bookingData.event)
        // quantity - boobkingData
        
        // get the event the tickets are for
        const event = await getEventById(bookingData.event)

        // calculate the totalPrice with the event we just found and the quantity given in the bookingData
        const totalPrice = event.price * bookingData.quantity

        // add totalPrice we calculated to the incoming bookingData object
        bookingData.totalPrice = totalPrice

        // 2. decrease available tickets from event
        // calculate new available tickets
        const newAvailableTickets = event.availableTickets - bookingData.quantity

        // update events using updateEvent events controller function to reflect newAvailableTickets
        // need to pass in event id, and information to update AS AN OBJECT
        // everything that has to do with our database requires async/await
        // only need to update ticket amount, we don't need a variable for the event data
        await updateEvent(bookingData.event, {availableTickets: newAvailableTickets})

        // create the new booking
        const booking = await Booking.create(bookingData)

        // return the new booking
        return booking
        
    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// export the controller functions
module.exports = {createBooking}
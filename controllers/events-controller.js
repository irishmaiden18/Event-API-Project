// import the Events model
const Event = require("../models/events-model");

// write a function that will return all events
// everything that has to do with our database requires async/await
const getAllEvents = async () => {

    try {
        
        // get a list of all the events
        const events = await Event.find()

        // return all the events
        return events

    } catch (error) {
        
        // propogates the error to the router file
        throw error

    }
}

// write a function that will take in a eventID and return the data associated with that event
// everything that has to do with our database requires async/await
const getEventById = async (eventId) => {

    try {
        
        // find a event by the given eventId
        const event = await Event.findById(eventId)

        // if there is no event found
        if (!event) {

            // throw an error
            throw Error ("Event NOT found")
        }

        // return the found event
        return event

    } catch (error) {
     
        // propogates the error to the router file
        throw error

    }
}

// write a function that will take in eventData and create a new data entry based on that data
// everything that has to do with our database requires async/await
const createEvent = async (eventData) => {

    try {

        // create the new event from the eventData
        const newEvent = await Event.create(eventData);

        // return the new event
        return newEvent

    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// write a function that will edit an existing event data entry based on given data
// everything that has to do with our database requires async/await
const updateEvent = async (eventId, eventData) => {

    try {

        // find the event by id and update using given eventData
        // new: true makes the function return the updated entry rather than the initial entry
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            eventData,
            {new: true}
        )

        // if no updated event is found
        if (!updatedEvent) {

            // throw an error
            throw Error ("Event NOT found!")
        }

        // return the updated event
        return updatedEvent
        
    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// write a function to delete a event given an id
// anything that has to do with our database requires async/await
const deleteEvent = async (eventId) => {

    try {

        // find the event by id and delete it
        const eventToDelete = await Event.findByIdAndDelete(eventId)

        // if no eventToDelete found
        if (!eventToDelete) {

            // throw an error
            throw Error ("Event NOT found!")
        }
        
        // return the eventToDelete
        return eventToDelete

    } catch (error) {
        
        // propogates the error to the router file
        throw error

    }
}

// export the controller functions
module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
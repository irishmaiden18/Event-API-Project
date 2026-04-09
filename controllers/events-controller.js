// import the Events model
const Event = require("../models/events-model");

// write a function that will return events based on queries
// everything that has to do with our database requires async/await
// queryData = req.query
// in router we will call getAllEvents with the query data like so:
// getAllEvents(req.query)
const getAllEvents = async (queryData) => {

    try {

        /*
            queryData example: 
            {
                category: "concert"
                date: "05-10-26",
            }              
        */
        // Object that will keep track of our filter queries
        const filterObject = {}

        // filter based on category
        // check whether the category query data exists
        // if it does
        if (queryData.category) {

            // add it to our filterObject
            filterObject.category = queryData.category
        }

        // filter based on date
        // check whether the date query data exists
        // if it does
        if (queryData.date) {

            // add it to our filterObject
            filterObject.date = queryData.date
        }

        // filter based on price
        // deal with a range, getting everything between minprice and maxprice

        // add to our filterObject
        filterObject.price = {
            // greater than or equal to queryData.minprice if it exists, if it doesn't use zero
            $gte: queryData.minPrice || 0,
            // and less than or equal to queryData.maxprice if it exists, if it doesn't, default to infinity
            $lte: queryData.maxPrice || Infinity
        }

        // sorting with mongodb
        // {propertyToSortBy: sortOrder}
        // use a sort object, like filter object
        const sortObject = {}

        // should look something like this: {title: "desc"}
        // sortObject[queryData.sortBy]
        // first, evaulate queryData.sortBy
        // sortObject["title"] - same as sortObject.title
        // uses default sortby id and sort order of ascending
        sortObject[queryData.sortBy || "title"] = queryData.sortOrder || "asc" 

        // get a list of the events filtered on the properties of filterObject, if there are no properties we get them all
        const events = await Event.find(filterObject).sort(sortObject)

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
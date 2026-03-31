// import express
const express = require("express");

// set up router
const router = express.Router();

// import controller functionality
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require("../controllers/events-controller");

// handle GET requests to /api/v1/events
// anything that has to do with our database needs async/await
router.get("/", async (req, res) => {
    
    try {
    
        // call the getAllEvents events-controller function
        const allEvents = await getAllEvents(req.query)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: allEvents
        })

    } catch (error) {

        // send a failure message to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
        
    }
})

// handle GET routes with an ID /api/v1/events/:id
// anything that has to do with our database needs async/await
router.get("/:id", async (req, res) => {

    try {
        
        // call the getEventById events-controller function
        // anything that has to do with our database needs async/await
        const event = await getEventById(req.params.id)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: event
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(404).json ({
            message: "failure",
            paylod: "Can't get event by ID"
        })
    }
})

// handle POST requests to /api/v1/events
// anything that has to do with our database needs async/await
router.post("/", async (req, res) => {

    try {

        // call the controller createEvent function
        const newEvent = await createEvent(req.body);

        // send success response to the user
        res.json ({
            message: "success",
            payload: newEvent
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// handle PUT requests to /api/v1/events/:id
// anything that has to do with our database needs async/await
router.put("/:id", async (req, res) => {

    try {
        
        // call the updateEvent events-controller function
        const updatedEvent = await updateEvent(req.params.id, req.body)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: updatedEvent
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(404).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// handle DELETE requests to /api/v1/events/:id
// anything that has to do with our database needs async/await
router.delete("/:id", async (req, res) => {

    try {
        
        // call the events controller function deleteEvent
        const eventToDelete = await deleteEvent(req.params.id)

        // send a success message to the user
        res.json ({
            message: "success",
            payload: `${eventToDelete.title} has been successfully removed from the database!`
        })
        
    } catch (error) {
        
        // send a failure response to the user
        res.status(404).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// export the router
module.exports = router;
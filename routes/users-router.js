// import express
const express = require("express");

// set up router
const router = express.Router();

// import controller functionality
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/users-controller");

// handle GET requests to /api/v1/users
// anything that has to do with our database needs async/await
router.get("/", async (req, res) => {
    
    try {
    
        // call the getAllUsers users-controller function
        const allUsers = await getAllUsers()

        // send a success response to the user
        res.json ({
            message: "success",
            payload: allUsers
        })

    } catch (error) {

        // send a failure message to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
        
    }
})

// handle GET routes with an ID /api/v1/users/:id
// anything that has to do with our database needs async/await
router.get("/:id", async (req, res) => {

    try {
        
        // call the getUserById users-controller function
        // anything that has to do with our database needs async/await
        const user = await getUserById(req.params.id)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: user
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(404).json ({
            message: "failure",
            paylod: error.message
        })
    }
})

// handle POST requests to /api/v1/users
// anything that has to do with our database needs async/await
router.post("/", async (req, res) => {

    try {

        // call the controller createUser function
        const newUser = await createUser(req.body);

        // send success response to the user
        res.json ({
            message: "success",
            payload: newUser
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// handle PUT requests to /api/v1/users/:id
// anything that has to do with our database needs async/await
router.put("/:id", async (req, res) => {

    try {
        
        // call the updateUser users-controller function
        const updatedUser = await updateUser(req.params.id, req.body)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: updatedUser
        })

    } catch (error) {
        
        // send a failure response to the user
        res.status(404).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// handle DELETE requests to /api/v1/users/:id
// anything that has to do with our database needs async/await
router.delete("/:id", async (req, res) => {

    try {
        
        // call the users controller function deleteUser
        const userToDelete = await deleteUser(req.params.id)

        // send a success message to the user
        res.json ({
            message: "success",
            payload: `${userToDelete.username} has been successfully removed from the database!`
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
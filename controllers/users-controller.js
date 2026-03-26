// import the Users model
const User = require("../models/users-model");

// write a function that will take in userData and create a new data entry based on that data
// everything that has to do with our database requires async/await
const createUser = async (userData) => {

    try {

        // create the new user from the userData
        const newUser = await User.create(userData);

        // return the new user
        return newUser

    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// export the controller functions
module.exports = { createUser };
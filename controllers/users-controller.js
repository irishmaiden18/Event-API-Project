// import the Users model
const User = require("../models/users-model");

// write a function that will return all users
// everything that has to do with our database requires async/await
const getAllUsers = async () => {

    try {
        
        // get a list of all the users
        const users = await User.find()

        // return all the users
        return users

    } catch (error) {
        
        // propogates the error to the router file
        throw error

    }
}

// write a function that will take in a userID and return the data associated with that user
// everything that has to do with our database requires async/await
const getUserById = async (userId) => {

    try {
        
        // find a user by the given userId
        const user = await User.findById(userId)

        // if there is no user found
        if (!user) {

            // throw an error
            throw Error ("User NOT found")
        }

        // return the found user
        return user

    } catch (error) {
     
        // propogates the error to the router file
        throw error

    }
}

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

// write a function that will edit an existin user data entry based on given data
// everything that has to do with our database requires async/await
const updateUser = async (userId, userData) => {

    try {

        // find the user by id and update using given userData
        // new: true makes the function return the updated entry rather than the initial entry
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            userData,
            {new: true}
        )

        // if no updated user is found
        if (!updatedUser) {

            // throw an error
            throw Error ("User NOT found!")
        }

        // return the updated user
        return updatedUser
        
    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// write a function to delete a user given an id
// anything that has to do with our database requires async/await
const deleteUser = async (userId) => {

    try {

        // find the user by id and delete it
        const userToDelete = await User.findByIdAndDelete(userId)

        // if no userToDelete found
        if (!userToDelete) {

            // throw an error
            throw Error ("User NOT found!")
        }
        
        // return the userToDelete
        return userToDelete

    } catch (error) {
        
        // propogates the error to the router file
        throw error

    }
}

// export the controller functions
module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
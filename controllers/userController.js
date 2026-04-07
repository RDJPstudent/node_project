const mongoose = require('mongoose');
const User = require('../models/userModel.js');
// This is essentially the business logic


// Create a new user
async function createUser(req, res) { // The route handler makes this work
    try{

        //We create a new user here
        const newUser = { // CREATES a new user object that exists in memory
            //This is part of the data model. we need to fill out the fields
            first_name: req.body.first_name,
            username: req.body.username,
            email: req.body.email,
        };


        //This creates a new user in the documents
        const user = new User(newUser);

        //save or persist the new user document in database
        await user.save();

        //send a response to the client
        res.status(201).json({"user created and you are A O K": user});

    }catch(error){
        res.status(500).json({"Internal server mess-up": error.message});
        //Proper error handling

    }
}

module.exports = { createUser };
//We need to now export the new created user, the curly braces stop it from being a model
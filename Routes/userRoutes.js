
const express = require('express'); //import express from 'express';
const router = express.Router(); // import configure from './routers';
const userController = require('../controllers/userController'); //For the createUser function
const User = require('../models/userModel.js');
const mongoose = require('mongoose');


//Home page
router.get('/home', (req, res) =>{
    //let user = "Jor";

    //res.render('home', {user}).status(200);
    res.render('home');
});

//This route will link the createUser function to the Root Handler
router.post('/users', userController.createUser); //Referencing the file and the function in this line


//example of a route parameter
router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});


//example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});

//example of a middleware function
router.use((req, res, next) =>{
    console.log(`Request URL: ${req.url}.  Time: ${new Date()}`);
    next();
});

// API endpoint that exposes all user resources from the database
router.get('/users', async (req, res) =>{
    try{
    const users = await User.find();

    res.json(users).status(200);
    } catch (error){
        res.status(500).json({ message: 'Error fetching a random user', error: error.message});
    }
    
});

//commonjs syntax to export the router (configured in package.json "type": "commonjs")
module.exports = router;

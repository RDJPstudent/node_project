
const express = require('express'); //import express from 'express';
const router = express.Router(); // import configure from './routers';
const userController = require('../controllers/userController'); //For the createUser function


//Home page
router.get('/home', (req, res) =>{
    let user = "Jor";

    res.render('home', {user}).status(200);
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

//commonjs syntax to export the router (configured in package.json "type": "commonjs")
module.exports = router;

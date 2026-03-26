const express = require('express');
const Router = express.router();

//examples of a route paramter

router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

//example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});

//Example of a Middleware Function
//This is a logger in essence.
router.use((req, res, next) =>{
    console.log(`Request URL: ${req.url}. Time: ${new Date()}`);
    next();
});


module.export = router;
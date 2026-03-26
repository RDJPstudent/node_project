
const express = require('express');
const router = express.Router();

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

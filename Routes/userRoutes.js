const express = require('express');
const router = express.router();

//examples of a route paramter

router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

//example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});


module.export = router;
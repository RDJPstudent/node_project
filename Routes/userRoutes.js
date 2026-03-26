const express = require('exrepss');
const router = express.router();

//examples of a route paramter

router.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});





module.export = router;

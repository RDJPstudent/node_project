//This is our app! Woo!
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//The slash is the root of a domain

//Route Handler
app.get('/', (req, res) => [
    res.send("Hello, World!")
]);
//controllers tend to give views
//API end points serve data

//Server Setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


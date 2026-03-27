//This is our app! Woo!
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const ejs = require('ejs');

//added on 2nd day
const userRoutes = require(`./routes/userRoutes`);

//View engine
app.set('view engine', 'ejs');
app.set( 'views', './views');
// The "./" is for relative path.




//added on 2nd day, GLOBAL middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(userRoutes);
// need access to static file, but before it!


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


//This is our app! Woo!
const express = require("express");
const app = express();

const ejs = require('ejs');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;

//added on 2nd day
const userRoutes = require("./routes/userRoutes");

//View engine
app.set('view engine', 'ejs');
app.set("views", './views');
// The "./" is for relative path.




//added on 2nd day, GLOBAL middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(userRoutes);
// need access to static file, but before it!


//The slash is the root of a domain

//Route Handler
app.get('/', (req, res) => {
    res.send("Hello, World!");
});
//controllers tend to give views
//API end points serve data

//Connect to MongoDB
// mongoose.connect(uri).then(() => {
//     console.log('Connected to MongoDB');
//     //server setp
//     app.listen(port, ()=> {
//         console.log(`Server is running on port ${port}`);
//     });
//     catch.((err) => {
//         console.log(`Server is running on port ${port}`);
//     })
    
// });

// }).catch(err) => {
//     console.log(`Error connecting o mongoDB: {err}`);
// }


app.get('/json-response', (req, res) => {

  const data = {
    name: "John Doy",

  }

  res.json(data);
});


//connect
mongoose
  .connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB");

    //server setup
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });





//This is our app! Woo!
const express = require("express");
const app = express();

const ejs = require('ejs');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs"); //npm i yamljs for this to work
const swaggerDocument = YAML.load("./swagger.yaml");


//added on 2nd day
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
//must be after parsing

const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000, // this is 15 minutes/ camelCase 'windowsMs'
  max: 12,
  message: "Too many requests! Jordon!",
  
});

async function throttling(req, res){
  try{
    setTimeout(() =>{
      next();
    },1000);
  }catch(error){
    console.error(error)
  }
}

//View engine
app.set('view engine', 'ejs');
app.set("views", './views');
// The "./" is for relative path.




//added on 2nd day, GLOBAL middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use(throttling);
app.use(limiter); // positioning matters. This should be before user/authRoutes
app.use(userRoutes);
app.use(authRoutes); // This is the after parsing
// need access to static file, but before it!
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Path to page


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





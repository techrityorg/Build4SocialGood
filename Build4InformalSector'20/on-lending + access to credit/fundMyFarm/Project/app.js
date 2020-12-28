const path = require('path');
const express = require("express");
const passport = require("passport");
const flash = require('express-flash');
const session = require('express-session');
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require('mongoose');
const multer = require('multer')
const app = express();

// const PORT = process.env.PORT || 2021

// const dbURL = process.env.NODE_ENV==='production' ? process.env.MONGODB_URI : 'mongodb://localhost/tractive_db'

// mongoose.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// mongoose.connection.on("connected", () => {
//   console.log("Database Connected!!!");
// });

// Passport Config
// require("./src/config/passport")(passport);
require("./src/config/funderPassport");
require("./src/config/fundeePassport");

// routes URL
const fundeeUrl = require("./src/routes/fundeeRoute");
const funderUrl = require("./src/routes/funderRoute");

const itemUrl = require("./src/routes/itemRoute");
const contactUrl = require("./src/routes/contactRoute");


// db config and constants
const config = require("./src/config/constant");
const database = require("./src/config/database");
const { sessionKey } = require('./src/config/constant');

// Express session
app.use(session({
    secret: sessionKey,
    resave: false,
    saveUninitialized: true
  }));

  // Connect flash
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express public
// app.use(express.static(path.join(__dirname, 'public')));

// production error (fetching data from database) is due to build
// i have spent more than 1 week debugging it
// coming back to make it work properly InsaAllah



// cors
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// routes
app.use("/fundees", fundeeUrl);
app.use("/funders", funderUrl);
app.use("/items", itemUrl);
app.use("/contact-us", contactUrl);


if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('./client/source/app.js'));
  app.use(express.static('fundmyfarm_client/build'));
  // app.use(express.static(path.join(__dirname, "client", "build")));
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'fundmyfarm_client', 'build', 'index.html'));
  });

}

app.use(morgan('tiny'));

app.use((req, res) => {
  res.status(404).send('Page not found');
})

// app.use((req, res) => {
//   res.status(404).send('Page not found');
// })

const PORT  = config.port
app.listen(PORT, () => {
    database()
    console.log(`Server listening on port ${PORT}`)
})


app.on('error', error => {
    console.log(`Error occured on the server ${error}`)
})

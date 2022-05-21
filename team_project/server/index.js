const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;
const cors = require("cors");

// changed the URL for AWS deployment
// If anyone pulls this code change it to frontendURL = "http://localhost:3000"
// Once you are done and want to push DON'T FORGET to change it back to frontendURL = "http://35.89.120.177:3000"

// const frontendURL = "http://localhost:3000";
const frontendURL = "http://54.218.147.228:3000";

var session = require("express-session");

app.use(cors({ origin: frontendURL, credentials: true }));
app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", frontendURL);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000,
  })
);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing Logic
const dashboardRoute = require("./Routes/dashboard");

//Routes
app.use("/dashboard", dashboardRoute);

module.exports = app;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

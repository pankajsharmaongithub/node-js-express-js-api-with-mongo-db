require("dotenv").config();
require("./config/database").connect();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("./middleware/auth");
const cors = require('cors')
const dateMod = require('date-and-time')


// importing user context
const User = require("./model/user");
const Task = require("./model/task");

const express = require("express");
const app = express();
app.use(express.json());

app.use(cors());

// Home page
app.get("/", (req, res) => {
    res.send("Home page");
});

// login page
app.get("/login", (req, res) => {
    res.status(200).send("Login Now");
});

// Home page
app.get("/dashboard",auth, (req, res) => {
    res.send("Welcome 🙌 to Dashboard page ");
});


// Register control
require('./routes/register')(app,User,bcrypt,jwt);

// Login control
require('./routes/login')(app,User,bcrypt,jwt);


// Create  task
require('./routes/createTask')(app,Task,dateMod);

// get Daily task
require('./routes/getDailyTask')(app,Task);


// update Daily task
require('./routes/updateTask')(app,Task,dateMod);

// update Daily task
require('./routes/updateTaskStatus')(app,Task,dateMod);


// Delete Daily task
require('./routes/deleteTask')(app,Task);



module.exports = app;
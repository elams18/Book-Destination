const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require('./dbconnect.js');
var userController = require('./controllers/usersController');
var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>console.log('server started at port 3000'));

app.use('/users',userController);
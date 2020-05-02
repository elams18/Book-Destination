const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const {mongoose} = require('./dbconnect.js');
var userController = require('./controllers/usersController');
var bookController = require('./controllers/bookController');
var app = express();
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:4200"}));
app.listen(3000, ()=>console.log('server started at port 3000'));
app.use('/books',bookController);
app.use('/users',userController);


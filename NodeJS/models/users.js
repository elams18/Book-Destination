const mongoose = require("mongoose");

var user = mongoose.model('user',{
    userid: {type: String},
    email: {type:String},
    password: {type:String},
    points: {type: Number}
});

module.exports = user ;
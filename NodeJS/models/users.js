const mongoose = require("mongoose");

var user = mongoose.model('user',{
    userid: {type: String},
    name: {type:String},
    points: {type: Number}
});

module.exports = user ;
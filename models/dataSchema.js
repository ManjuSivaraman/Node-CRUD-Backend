var mongoose = require('mongoose');

var dataCollect = mongoose.Schema({
    name : String,
    email : String
},
{
    versionKey: false
});

module.exports = mongoose.model('data' , dataCollect);
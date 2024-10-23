const mongoose = require('mongoose');

const usersSachem = mongoose.Schema({
    name : String,
    username : String ,
    password : String,
    
});


module.exports = mongoose.model('passportUsers',usersSachem)
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName :{
        type : String
    },
    number : {
        type: Number
    },
    username : {
        type: String,
        unique : true
    },
    password : {
        type : String
    },
    isDeleted : {
        type: Boolean,
        default : false 
    },
    isActive : {
        type: Boolean,
        default : true
    }
},{
    versionKey : false,
    timestamp : true
})


module.exports = mongoose.model('todoUsers',userSchema);
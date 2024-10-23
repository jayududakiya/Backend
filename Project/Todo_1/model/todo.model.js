const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todoText : String,
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'todousers'
    },
    isDeleted : {
        type: Boolean,
        default : false 
    },
    isDone : {
        type: Boolean,
        default : false
    }
},{
    versionKey :  false,
    timestamp : true
})


module.exports = mongoose.model('todos',todoSchema);
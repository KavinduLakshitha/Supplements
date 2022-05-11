const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },

    price : {
        type: Number,
        required:true
    },
    category : String
})

const Supplementdb = mongoose.model('supplementdb',schema);

module.exports = Supplementdb;
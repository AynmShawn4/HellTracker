
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//data modal for individual person
var user = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    epics: []
});

// Compile model from schema
module.exports = mongoose.model('UserModel', user );

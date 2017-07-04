
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//data modal for individual item
var HellSchema = new Schema({
    itemName: {
    	type: String,
    	required: true,
        unique: true
    },
    itemLevel: {
    	type: Number,
    	required: true
    },
    type1: {
    	type: String,
    	required: true
    },
    type2: {
    	type: String,
    	required: true
    },

});

HellSchema
    .virtual('test')
    .get(function(){
        return 'testing!.';
    });

// Compile model from schema
module.exports = mongoose.model('HellModel', HellSchema );

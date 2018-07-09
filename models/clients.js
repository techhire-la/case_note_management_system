const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const clientSchema = new Schema({
    id: {type: String, required: true , unique: true},
    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    phone:{type: Number , required: true}
    address: String

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

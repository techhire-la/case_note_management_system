const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const clientSchema = new Schema({
  //  id: {type: String, required: true , unique: true},
    name:{type: String, required: true},
    lastName:{type: String, required: true},
  //  last_name:{type: String, required: true},
  //  email:{type: String, required: true, unique: true},
  //  phone:{type: Number , required: true},
    //address: {type: Number , required: true}
    Timestamp: {type: Date , default: Date.now}
});

/*
var db = mongoose.connection;
var clientData = { name: "Justin", lastName: "Timber"}

db.collection("client").insertOne(clientData, (req, res, err) =>{
  if (err) throw err;
console.log("inserted into client");
})


module.exports = mongoose.model('client', clientSchema);
*/

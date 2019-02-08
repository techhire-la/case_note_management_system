const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema and a Model

const clientSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  active: {type: Boolean, required: true}
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;

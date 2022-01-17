const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define user
const userSchema = new Schema({
	
	id: { createIndex: true, type: String },
	
	firstName: {type: String},
	
	lastName: {type: String},
	
	DOB: {type: Date},
	
	email: {type: String},
	
	userName: {type: String}

});

module.exports = mongoose.model("userInfo", userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tweetSchema = new Schema({

	id: { createIndex: true, type: String },

	userId : {type: String},
	
	Description: {type: String},
	
	CreatedDate: {type: Date},

	UpdatedDate: {type: Date},

	DeletedDate: {type: Date},

	Comments: {type : Array},

	Reactions: {type : Array}

});

module.exports = mongoose.model("tweet", tweetSchema);
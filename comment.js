const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({

	id: { createIndex: true, type: String },
	
	Description: {type: String},
	
	CreatedDate: {type: Date},

	UpdatedDate: {type: Date},

	DeletedDate: {type: Date},

	Reactions: {type : Array}

});

module.exports = mongoose.model("comment", commentSchema);
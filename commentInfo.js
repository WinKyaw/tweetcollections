const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentInfoSchema = new Schema({

	id: { createIndex: true, type: Number },
	
	userId: {type: Number},

	tweetId: {type: Number},

	commentId: {type: Number},

	reactionId: {type: Number}

});

module.exports = mongoose.model("commentInfo", commentInfoSchema);
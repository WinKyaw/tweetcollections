const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reactionSchema = new Schema({

	id: { createIndex: true, type: String },

	userId: {type: Number},

	reaction: {type: String}

});

module.exports = mongoose.model("reaction", reactionSchema);
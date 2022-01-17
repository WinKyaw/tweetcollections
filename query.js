var moment = require("moment");
module.exports ={

	getListOf3Daystweets: (req, res) => {
		db.tweetmodel.aggregate([

		{
			"$project" : {
				"updatedDate" : { $gte: moment().subtract(3, 'days').toDate()},
				"comments" : {"$size" : "$comments"}
			}
		},
		{
			"$sort" : { "updatedDate": -1, "comments" : -1}
		}], (res) => {
			console.log(res);
		}
		)
	},

	get5usersMostTweet: (req, res) => {
		db.usermodel.aggregate([
			{"$project" : "createdDate" : { "$gte" : moment().subtract(30, 'days').toDate()}},
			{"$sort" : {"$createdDate" : -1}},
			{"$group" : {
				"_id" : "$userId",
				"count" : {"$sum" : 1}
				
			}},
			{"$sort" : {"count" : -1}},
			{"$group" : {"uniqueValues" : {$addToSet: "$userId"}}}
			{"$limit" : 5}
			
			]);
	}

	get5usersMostInteraction: (req, res) => {
	 
		db.usermodel.aggregate([
			{ $limit: 1 },
	    	{ $project: { _id: '$$REMOVE' } }, 

		    { $lookup: { from: 'tweet', pipeline: [{ $match: { department: 'userId' } }], as: 'userTweets' } },
		    { $lookup: { from: 'comment', pipeline: [{ $match: { department: 'userId' } }], as: 'userComments' } },

		    { $project: { union: { $concatArrays: ["userTweets", "userComments"] } } },

		    { $unwind: '$union' },
		    { $replaceRoot: { newRoot: '$union' } },
		    {"$group" : {
				"_id" : "$userId",
				"count" : {"$sum" : 1}
			}},
			{"$sort" : {"count" : -1}},
			{"$group" : {"uniqueValues" : {$addToSet: "$userId"}}},
    		{"$limit" : 5}
			]);
	}



}
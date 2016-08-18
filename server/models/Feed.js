//schema for Users or feed, whoever post to data base
var mongoose = require('mongoose');

var feedSchema = mongoose.Scheme({
  name: String,
  copyright: String
});

var Feed = mongoose.model("Feed", feedSchema);

var openFeed = new Feed({
  name: 'this is the feed',
  copyright: 'some copyright'
});

openFeed.save(function(err, opsk){
  if (err) return console.error('err')
});

exports.feedSchema = feedSchema;
exports.Feed = Feed;
module.exports = Feed;

var saveEvent = require('../controllers/eventController');
var rp = require('request-promise');
var FeedMe = require('feedme')
  , parser = new FeedMe()
  , fs = require('fs');


  module.exports.requestRSS = function(feed){

    
rp(feed)
  .then((htmlString)=>{
    console.log('request worked');
    fs.writeFile('read.txt', htmlString, 'utf8', ()=>{})
  }).then(
    ()=>{
      fs.createReadStream('read.txt').pipe(parser);
      
  }).catch(
    (err)=>{
      console.log('error:', err);
  })

parser.on('title', function(title) {
  console.log('title of feed is', title);
});
parser.on('item', function(item) {

  saveEvent(item);
});

  }

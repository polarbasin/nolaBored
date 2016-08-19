//makes request and parses data
var saveEvent = require('./controllers/eventcontroller');
var rp = require('request-promise');
var FeedMe = require('feedme')
  , parser = new FeedMe()
  , fs = require('fs');

// for rss Feeds
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

// for api request 
module.exports.request = function(){

  rp('http://www.houseofblues.com/neworleans/api/EventCalendar/GetEvents?startDate=8/15/2016&endDate=9/1/2016&venueIds=221834&limit=30&offset=1&genre=&artist=&offerType=')
    .then((results) => {
    console.log('request 2 worked');
  }).catch(
    (err)=>{
      console.log('error:', err);
  })




}


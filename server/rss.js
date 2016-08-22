//makes request and parses data
var rp = require('request-promise');
let parseXmlStr = require('xml2js').parseString;

var saveEvent = Promiserequire('./controllers/eventcontroller');

// for rss Feeds
module.exports.requestRSS = function(feed){
  rp(feed)
  .then(xml => {
    return new Promise((resolve, reject) => {
      parseXmlStr(xml, (err, events) => {
        if (err) {
          reject(err);
        } else {
          console.log('events', events);
          resolve(events);
        }
      });
    });
  }).catch(err => {
    console.error('RSS request error:', err);
  });

  // parser.on('title', function(title) {
  //   console.log('title of feed is', title);
  // });
  // parser.on('item', function(item) {
  //   // save parsedXML to DB
  //   saveEvent(item);
  // });

};

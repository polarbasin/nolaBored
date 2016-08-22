// makes request and parses data
var rp = require('request-promise');
let Promise = require('bluebird');
let parseXmlStr = Promise.promisify(require('xml2js').parseString);

var saveEvent = require('./controllers/eventcontroller');

module.exports.requestRSS = function(feedUrl){
  rp(feedUrl)
  .then(parseXmlStr)
  .then(results => {
    let feed = results.rss.channel[0];
    return feed.item.forEach(item => {
      saveEvent(item);
    });
  })
  .catch(err => {
    console.error('RSS request error:', err);
  });
};

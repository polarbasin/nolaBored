const express = require('express');
const path = require('path');
const app = express();
var morgan = require('morgan');
var rp = require('request-promise');
var $ = require("jquery");
var bodyParser = require('body-parser');
app.use(morgan('dev'));
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
var saveEvent = require('../controllers/eventController');
var FeedMe = require('feedme')
  , parser = new FeedMe()
  , fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/events');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we got connected');
});



app.use('/', express.static('client/'));

app.use('/client/index.js', express.static('client/index.js'));

app.use('/client/app.module.js', express.static('client/app.module.js'));

app.use('/client/app.component.js', express.static('client/app.component.js'));

app.use('/node_modules', express.static('node_modules/'));

const port = process.env.PORT || 4657;


//these lines will parse the information out of the file where we load the rss fead


rp('http://www.bestofneworleans.com/gambit/Rss.xml?section=1222783')
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



app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
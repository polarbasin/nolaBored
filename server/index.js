const express = require('express');
const path = require('path');
const app = express();
var router = express.Router();
var morgan = require('morgan');
var $ = require("jquery");
var bodyParser = require('body-parser');
app.use(morgan('dev'));
const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
var rss = require('./rss.js');
var eventController = require('../controllers/eventControll');
var db = require('./dbConnect');


app.use('/', express.static('client/'));

app.use('/events', express.static('client/'));

app.use('/client/index.js', express.static('client/index.js'));

app.use('/client/app.module.js', express.static('client/app.module.js'));

app.use('/client/app.component.js', express.static('client/app.component.js'));

app.use('/node_modules', express.static('node_modules/'));

app.post('/api/events', eventController.create )

const port = process.env.PORT || 4657;


//these lines will parse the information out of the file where we load the rss fead

var feed = 'http://www.bestofneworleans.com/gambit/Rss.xml?section=1222783';
rss.requestRSS(feed);


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
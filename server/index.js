const express = require('express');
const path = require('path');
const app = express();
var morgan = require('morgan');
var rp = require('request-promise');
var bodyParser = require('body-parser');
app.use(morgan('dev'));
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));

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






// $.get('http://www.bestofneworleans.com/gambit/Rss.xml?section=1222783', function (data) {
//     $(data).find("entry").each(function () { // or "item" or whatever suits your feednpm 

//         console.log("------------------------");
//         console.log("title      : " + el.find("title").text());
//         console.log("link     : " + el.find("link").text());
//         console.log("description: " + el.find("description").text());
//     });
// });


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
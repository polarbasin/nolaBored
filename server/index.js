const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const rss = require('./rss.js');
const Event = require('./models/Event.js');
require('./dbConnect');
require('./config/passport')(passport);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// todo  move to router page
app.use('/', express.static('client/')); 

app.use('/node_modules', express.static('node_modules/'));


app.use('/client/index.js', express.static('client/index.js'));

app.use('/client/app.module.js', express.static('client/app.module.js'));

app.use('/client/app.routes.js', express.static('client/app.routes.js'));

app.use('/client/event.service.js', express.static('client/event.service.js'));

app.use('/client/event-form.component.js', express.static('client/event-form.component.js'));

app.use('/client/app.component.js', express.static('client/app.component.js'));

app.use('/client/app-layout.component.js', express.static('client/app-layout.component.js'));


app.use('/client/rxjs-operators.js', express.static('client/rxjs-operators.js'));

app.use('/client/datatypes/event.js', express.static('client/datatypes/event.js'));

// facebook auth
app.get('/login/facebook', 
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/' }), // need a failure route
  (req, res) => {
    res.redirect('/');
  });

// post events to page
app.get('/api/events', (req,res) => {
  Event.find((err, event) => {
    if (err){
      res.send(err);
    } else {
      res.send(event);
    }
  });
});

const port = process.env.PORT || 4657;

//these lines will parse the information out of the file where we load the rss fead
const feed = 'http://www.bestofneworleans.com/gambit/Rss.xml?section=1222783';
rss.requestRSS(feed);
// rss.request();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: String,
  location: String,
  time: Date, 
  link: String,
  author: String,
  description: String
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

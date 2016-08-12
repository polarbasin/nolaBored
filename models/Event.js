var mongoose = require('mongoose');


var eventSchema = mongoose.Scheme({
  title: String,
  location: String,
  time: Date, 
  link: String,
  author: String,
  description: String
})

var Event = mongoose.model('Event', eventSchema);

var opsk = new Event({
  title: 'operation spark open house',
  location: '748 camp st, new orleans La, 70103',
  author: 'Max Gudin',
  description: 'ready to party with the hackers'

});

opsk.save(function(err, opsk){
  if (err) return console.error('err')
});

export.eventSchema  = eventSchema;
export.Event = Event;
module.exports = Event;



var mongoose = require('mongoose');

// const Event = {

//   schema:
//     mongoose.Schema({
//       title: String,
//       location: String,
//       time: Date, 
//       link: String,
//       author: String,
//       description: String
//       }),

//   model:  mongoose.model('Event', Event.schema)
// }

// var opsk = new Event({
//   title: 'operation spark open house',
//   location: '748 camp st, new orleans La, 70103',
//   author: 'Max Gudin',
//   description: 'ready to party with the hackers'

// });

// opsk.save(function(err, opsk){
//   if (err) return console.error('err')
// });
var eventSchema = mongoose.Schema({
  title: String,
  location: String,
  time: Date, 
  link: String,
  author: String,
  description: String
})

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;



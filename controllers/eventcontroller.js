var Event = require('../models/Event.js');


const saveEvent = (createdEvent) => {
  var event = new Event({
    title: createdEvent.title,
    link: createdEvent.link,
    description: createdEvent.description
  });
    event.save(function(err, result){
      //res.json(result)
      if (err) return console.error('err')
    });
};

module.exports = saveEvent;


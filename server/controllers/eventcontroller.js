var Event = require('../models/Event.js');

const getImgUrl = str => {
  let results = /<img\s*src\s*=\s*(")(\S+)\1/.exec(str);
  return results ? results[2] : '../styles/placeholder.png';
};

// 'https://placehold.it/225x175'

const saveEvent = (createdEvent) => {
  var event = new Event({
    title: createdEvent.title,
    link: createdEvent.link,
    description: createdEvent.description,
    imgUrl: getImgUrl(createdEvent.description),
  });
  event.save(function(err, result){
    //res.json(result)
    if (err) return console.error('err');
  });
};

module.exports = saveEvent;


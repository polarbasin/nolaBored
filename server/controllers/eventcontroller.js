var Event = require('../models/Event.js');

const getImgUrl = str => {
  let results = /<img\s*src\s*=\s*(")(\S+)\1/.exec(str);
  return results ? results[2] : '../styles/placeholder.png';
};

const saveEvent = createdEvent => {
  var event = new Event({
    title: createdEvent.title,
    link: createdEvent.link,
    description: createdEvent.description,
    imgUrl: getImgUrl(createdEvent.description),
  });
  event.save(err => {
    if (err) return console.error('err');
  });
};

module.exports = saveEvent;

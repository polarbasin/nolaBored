var Event = require('../models/Event.js');

const getImgUrl = str => {
  let results = /<img\s*src\s*=\s*(")(\S+)\1/.exec(str);
  return results ? results[2] : '../styles/placeholder.png';
};

const saveEvent = event => {
  var newEvent = new Event({
    title: event.title,
    link: event.link,
    description: event.description,
    imgUrl: event.imgUrl || getImgUrl(event.description),
    // extras
    // time: event.eventData,
    // postedBy: event.userID,
  });
  newEvent.save(err => {
    if (err) return console.error('err');
  });
};

module.exports = saveEvent;

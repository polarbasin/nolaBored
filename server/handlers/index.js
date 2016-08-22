const Event = require('../models/Event.js');

module.exports = {
  getEvents: (req, res) => {
    Event.find((err, event) => {
      if (err) {
        res.send(err);
      } else {
        res.send(event);
      }
    });
  },
  postEvent: (req, res) => {
    let event = req.body;
    console.log(event);
    res.send(event);
  },
};

"use strict";
var Event = (function () {
    function Event(_id, title, location, time, link, description, author) {
        this._id = _id;
        this.title = title;
        this.location = location;
        this.time = time;
        this.link = link;
        this.description = description;
        this.author = author;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map
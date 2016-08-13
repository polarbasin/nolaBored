"use strict";
var AppController = (function () {
    function AppController(eventService) {
        this.eventService = eventService;
        this.active = false;
    }
    AppController.prototype.ngOnInit = function () { this.getEvents(); };
    AppController.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (events) { return _this.events = events; });
    };
    AppController.prototype.toggleActiveState = function () {
        this.active = !this.active;
    };
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
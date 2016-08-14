"use strict";
var HeroListComponent = (function () {
    function HeroListComponent(eventService) {
        this.eventService = eventService;
        this.mode = 'Observable';
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    HeroListComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (events) {
            _this.events = _this.events.title;
        }, function (error) { return _this.errorMessage = error; });
    };
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=eventlist.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// template for event-form. No functionality added to event services.
var core_1 = require('@angular/core');
var EventFormComponent = (function () {
    function EventFormComponent() {
    }
    EventFormComponent = __decorate([
        core_1.Component({
            selector: 'event-form',
            template: "<div class=\"event-form\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"title\">Event Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"location\">Where is the event happening?</label>\n        <input type=\"text\" class=\"form-control\" id=\"location\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"time\">When does it start?</label>\n        <input type=\"text\" class=\"form-control\" id=\"time\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"link\">Have a link? Put it here!</label>\n        <input type=\"text\" class=\"form-control\" id=\"link\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Add a short description about your event</label>\n        <input type=\"text\" class=\"form-control\" id=\"description\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], EventFormComponent);
    return EventFormComponent;
}());
exports.EventFormComponent = EventFormComponent;
//# sourceMappingURL=event-form.component.js.map
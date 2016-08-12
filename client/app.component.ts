import { Component } from '@angular/core';
import { AppCtrl } from './controllers/app'
@Component({
  selector: 'app',
  template: `<div class="col-md-12" id="header"><h1>BORED</h1></div>
  <div class="container" ng-controller="AppCtrl">
    <div class="events">
      <div class="row" ng-repeat="event in events">
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
      </div>
      <div class="row" ng-repeat="event in events">
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
      </div>
      <div class="row" ng-repeat="event in events">
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
      </div>
      <div class="row" ng-repeat="event in events">
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
      </div>
      <div class="row" ng-repeat="event in events">
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
        <div class="col-md-2">Event</div>
      </div>
    </div>
  </div>`
})
export class AppComponent { }
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
        // <div class="col-md-2" ng-mouseover="moreDetails()">{{event}}</div>
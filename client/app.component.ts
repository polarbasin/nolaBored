import { Component } from '@angular/core';
import { AppCtrl } from './controllers/app'
@Component({
  selector: 'app',
  template: 
  `<div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1></div>
  <div class="container" ng-controller="AppCtrl">
    <div class="events">
      <div class="row" ngrepeat="event in events">
        <div class="col-md-3" ng-mouseover="moreDetails()">{{event}}</div>
        <div class="col-md-3" ng-mouseover="moreDetails()">{{event}}</div>
        <div class="col-md-3" ng-mouseover="moreDetails()">{{event}}</div>
        <div class="col-md-3" ng-mouseover="moreDetails()">{{event}}</div>
      </div>
    </div>
  </div>`
})
export class AppComponent { }

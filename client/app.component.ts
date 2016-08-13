import { AppController } from './app.controller';
import { Component }     from '@angular/core';
import { NgFor }         from '@angular/common';
import { bootstrap }     from '@angular/platform-browser-dynamic';
import 'rxjs-operators.js';
@Component({
  selector: 'app',
  template:
  `<div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1></div>
    <div class="container" ng-controller="AppController">
      <div class="events">
        <div class="row" *ngFor="let event of events">
          <div class="col-md-3">{{event.title}}</div>
          <div class="col-md-3">{{event.title}}</div>
          <div class="col-md-3">{{event.title}}</div>
          <div class="col-md-3">{{event.title}}</div>
        </div>
      </div>
   </div>
   <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>`,
   directives: [NgFor]
}) 

export class AppComponent { }

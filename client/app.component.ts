import { Component, OnInit }     from '@angular/core';
import { NgFor }         from '@angular/common';
import { bootstrap }     from '@angular/platform-browser-dynamic';
import 'rxjs-operators.js';

@Component({
  selector: 'app',
  template:
  `<div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1></div>
    <base href="/">
    <div class="container">
      <div class="events">
        <div class="row" *ngFor="let event of events">
          <div class="col-md-3">{{event}}</div>
          <div class="col-md-3">{{event}</div>
          <div class="col-md-3">{{event}}</div>
          <div class="col-md-3">{{event}</div>
        </div>
      </div>
   </div>
   <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>`,
  directives: [NgFor],
}) 

export class AppComponent { }

import { Component }     from '@angular/core';
import { Http }          from '@angular/http';
import { EventService }  from './event.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ EventService ],
  template: `
    <div class="container body-container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { }

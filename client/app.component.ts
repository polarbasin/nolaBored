import { Component, OnInit }     from '@angular/core';
import { NgFor }                 from '@angular/common';
import { bootstrap }             from '@angular/platform-browser-dynamic';
import { Http, Response }        from '@angular/http';
import { EventService }          from './event.service';
import { Event }                 from './datatypes/event';

@Component({
  selector: 'app',
  providers: [ EventService ],
  template:
  `<div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1></div>
    <div class="container">
      <div class="events">
        <div class="row">
          <div class="col-md-4" id="event" *ngFor="let event of events">
          <p>{{ event.description }}</p>
          <p>{{ event.link }}</p>
          <p>{{ event.title }}</p>
          </div>
        </div>
      </div>
   </div>`,
  directives: [ NgFor ]
}) 

export class AppComponent {
  public errorMessage: any;
  public events: any;


  constructor(private eventService:EventService) {
     eventService.events.subscribe(
         events => this.events = events,
         error => console.error('error ' + error),
         () => console.log('Completed!')
       );
  }

  // ngOnInit() {
  //   console.log('Initialized!');
  // }

  // getEvents() {
  //   this.eventService.getEvents().then(
  //     events => this.events = events,
  //     error => this.errorMessage = <any>error
  //     );
  // }

}

const EVENTS: Event[] = [
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },  
  {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' }
];

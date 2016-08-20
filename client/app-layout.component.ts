import { Component, OnInit }    from '@angular/core';
import { NgFor }        from '@angular/common';
import { Event }        from './datatypes/event';
import { EventService } from './event.service';

@Component({
  selector: 'app-layout',
  template:
  `<div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1>
    <form action="index.html" class="login">
      <h3>Add your own events!</h3>
      <input type="submit" value="Login with facebook" class="login-submit">
    </form>
  </div>
    <div class="container">
      <div class="events">
        <div class="row">
          <div class="col-md-4" id="event" *ngFor="let event of events | slice:0:24; let i = index">
            <div class="details">
              <a target="_new" href="{{event.link}}">
                <h3>{{ event.title }}</h3>
              </a>
              <img src="{{ event.imgUrl }}">
            </div>
          </div>
        </div>
      </div>
   </div>`,
  directives: [ NgFor ]
})

export class AppLayoutComponent implements OnInit {  
    public errorMessage: any;
    public events: any;

  constructor(private eventService:EventService) {
     eventService.events.subscribe(
         events => this.events = events,
         error => console.error('error ' + error),
         () => console.log('Completed!')
       );
  }

  ngOnInit() {
    console.log('Initialized!');
  }

}

// Dummy Events for CSS styles
// const EVENTS: Event[] = [
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },  
//   {_id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' }
// ];
import { OnInit, OnDestroy } from '@angular/core';
import { EventService } from './eventservice.component';
export class HeroListComponent implements OnInit {
  errorMessage: string;
  events: Event[];
  mode = 'Observable';
  constructor (private eventService: EventService) {}
  ngOnInit() { 
    this.getEvents(); 
  }
  getEvents() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = this.events.title;
    },
                       (error) =>  this.errorMessage = <any>error);
  }
  // addEvent (title: string) {
  //   if (!title) { return; }
  //   this.eventService.addEvent(title)
  //                    .subscribe(
  //                      event  => this.events.push(event),
  //                      error =>  this.errorMessage = <any>error);
  // }
}
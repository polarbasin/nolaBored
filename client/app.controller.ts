import {HTTP_BINDINGS, Http} from '@angular/http';

export class AppController {
  events: Event[];
  mode: 'Observable';
  constructor (private eventService: EventService) {}
  
  ngOnInit() { this.getEvents(); }

  getEvents() {
    this.eventService.getEvents().subscribe(
         events => this.events = events,
         error => this.errorMessage = <any>error);
  }

  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }
}

import { Injectable }        from '@angular/core';
import { Http, Response }    from '@angular/http';
import { Event }             from './datatypes/event';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  public eventsUrl = 'api/events';  // URL to web api
  public events: any;

  constructor(public http: Http) {
    this.events = http.get(this.eventsUrl)
                      .map(response => response.json()); 
  }

  public getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  public extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  public handleError(error: any) {
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
   console.error(errMsg); // log to console instead
   return Promise.reject(errMsg);
  }
}
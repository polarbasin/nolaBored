import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventService {
  constructor (private http: Http) {}
  private eventsUrl = 'api/events';  // URL to web API
  getEvents(): Observable<Event[]> {
    return this.http.get(this.eventsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    let errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
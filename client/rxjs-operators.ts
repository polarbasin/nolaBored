import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs
// Import just the rxjs statics and operators we need for the app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/util/root';
import 'rxjs/symbol/observable';
import 'rxjs/util/ObjectUnsubscribedError';
import 'rxjs/observable/PromiseObservable';
import 'rxjs/Observable';
import 'rxjs/Subject';
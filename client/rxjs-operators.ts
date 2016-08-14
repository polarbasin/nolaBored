import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs
// Import just the rxjs statics and operators we need for the app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch.js';
import 'rxjs/add/operator/debounceTime.js';
import 'rxjs/add/operator/distinctUntilChanged.js';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/operator/switchMap.js';
import 'rxjs/add/operator/toPromise.js';
import 'rxjs/util/root.js';
import 'rxjs/symbol/observable.js';
import 'rxjs/util/ObjectUnsubscribedError.js';
import 'rxjs/observable/PromiseObservable.js';
import 'rxjs/Observable.js';
import 'rxjs/Subject.js';
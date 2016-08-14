"use strict";
require('rxjs/Rx'); // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs
// Import just the rxjs statics and operators we need for the app.
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch.js');
require('rxjs/add/operator/debounceTime.js');
require('rxjs/add/operator/distinctUntilChanged.js');
require('rxjs/add/operator/map.js');
require('rxjs/add/operator/switchMap.js');
require('rxjs/add/operator/toPromise.js');
require('rxjs/util/root.js');
require('rxjs/symbol/observable.js');
require('rxjs/util/ObjectUnsubscribedError.js');
require('rxjs/observable/PromiseObservable.js');
require('rxjs/Observable.js');
require('rxjs/Subject.js');
//# sourceMappingURL=rxjs-operators.js.map
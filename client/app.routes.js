"use strict";
const router_1 = require('@angular/router');
const app_layout_component_1 = require('./app-layout.component');
exports.routes = [
    { path: '', component: app_layout_component_1.AppLayoutComponent, terminal: true },
];
exports.APP_ROUTES_PROVIDER = router_1.provideRouter(exports.routes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map
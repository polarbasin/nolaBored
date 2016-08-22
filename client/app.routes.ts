import { RouterModule, provideRouter } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';
// import { LoginComponent } from './login.component';
// import { AddEventComponent } from './add-event.component';
import { EventFormComponent } from './event-form.component';

export const routes = [
  { path: '', component: AppLayoutComponent, terminal: true },
  // { path: '', component: EventFormComponent,  },
  // { path: 'login', component: LoginComponent, terminal: true },
  // { path: 'add-event', component: AddEventComponent, terminal: true },
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);

export const routing = RouterModule.forRoot(routes);

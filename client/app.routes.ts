import { RouterModule, provideRouter } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';
import { LoginComponent } from './login.component';
import { EventFormComponent } from './event-form.component';

export const routes = [
  { path: '', component: AppLayoutComponent, terminal: true },
  { path: 'login', component: LoginComponent },
  { path: 'add-event', component: EventFormComponent },
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);

export const routing = RouterModule.forRoot(routes);

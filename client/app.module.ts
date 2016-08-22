import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { AppLayoutComponent }      from './app-layout.component';
import { EventFormComponent }      from './event-form.component';
import { APP_ROUTES_PROVIDER }     from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [ 
    AppComponent, 
    AppLayoutComponent,
    EventFormComponent
  ],
  providers: [
    APP_ROUTES_PROVIDER
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
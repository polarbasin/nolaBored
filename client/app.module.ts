import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { AppLayoutComponent }      from './app-layout.component';
import { EventFormComponent }      from './event-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [ AppComponent, 
                  AppLayoutComponent,
                  EventFormComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
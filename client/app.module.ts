import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
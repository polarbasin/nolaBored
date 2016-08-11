import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div class="container" ng-controller="AppCtrl">
    <table>
      <thead>
        <tr>
          <th>BORED</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="event in events">
          <td ng-mouseover="moreDetails()">{{event.title}}</td>
          <td ng-mouseover="moreDetails()">{{event.time}}</td>
          <td ng-mouseover="moreDetails()">{{event.description}}</td>
        </tr>
        <tr>
          <td>EventTitle1</td>
          <td>EventTitle2</td>
          <td>EventTitle3</td>
        </tr>
        <tr>
          <td>EventTitle1</td>
          <td>EventTitle2</td>
          <td>EventTitle3</td>
        </tr>
        <tr>
          <td>EventTitle1</td>
          <td>EventTitle2</td>
          <td>EventTitle3</td>
        </tr>
      </tbody>
    </table>
  </div>`
})
export class AppComponent { }
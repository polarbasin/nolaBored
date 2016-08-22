import { Component } from '@angular/core';

@Component({
  selector: 'add-event-button',
  template: `
    <div class="login">
      <a routerLink="/add-event">
        <button class="login-submit">
          Add your own event!
        </button>
      </a>
    </div>
   `
})

export class AddEventButtonComponent { }

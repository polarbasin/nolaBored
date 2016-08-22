import { Component } from '@angular/core';

@Component({
  selector: 'login-button',
  template: `
    <div class="login">
      <a href="/login/facebook">
        <button class="login-submit">
          Login with facebook
        </button>
      </a>
    </div>
   `
})

export class LoginButtonComponent { }

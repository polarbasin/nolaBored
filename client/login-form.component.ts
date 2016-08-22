import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  template: `
    <form action="/login/facebook" class="login">
      <h3>Add your own events!</h3>
      <input type="submit" value="Login with facebook" class="login-submit">
    </form>
   `
})

export class LoginFormComponent { }

// template for event-form. No functionality added to event services.
import { Component } from '@angular/core';

@Component({
    selector: 'event-form',
    template: `<div class="event-form">
    <h3>Add your own event</h3>
    <form>
      
      <div class="form-group">
        <label for="title">Event Name</label>
        <input type="text" class="form-control" id="title" required>
      </div>

      <div class="form-group">
        <label for="link">Event Link</label>
        <input type="text" class="form-control" id="link">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>` 
})

export class EventFormComponent { }
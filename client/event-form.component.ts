// template for event-form. No functionality added to event services.
import { Component } from '@angular/core';

@Component({
    selector: 'event-form',
    template: `<div class="event-form">
    <form>
      <div class="form-group">
        <label for="title">Event Title</label>
        <input type="text" class="form-control" id="title" required>
      </div>

      <div class="form-group">
        <label for="location">Where is the event happening?</label>
        <input type="text" class="form-control" id="location" required>
      </div>

      <div class="form-group">
        <label for="time">When does it start?</label>
        <input type="text" class="form-control" id="time" required>
      </div>

      <div class="form-group">
        <label for="link">Have a link? Put it here!</label>
        <input type="text" class="form-control" id="link">
      </div>

      <div class="form-group">
        <label for="description">Add a short description about your event</label>
        <input type="text" class="form-control" id="description">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>` 
})

export class EventFormComponent { }
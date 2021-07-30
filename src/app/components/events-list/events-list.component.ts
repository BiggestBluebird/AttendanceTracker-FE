import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events?: Event[];
  currentEvent?: Event;
  currentIndex = 0;
  title = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getAll()
      .subscribe(
        data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEvents();
    this.currentEvent = {};
    this.currentIndex = 0;
  }

  setActiveEvent(event: Event, index: number): void {
    this.currentEvent = event;
    this.currentIndex = index;
  }

  removeAllEvents(): void {
    this.eventService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.eventService.findByTitle(this.title).subscribe( data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
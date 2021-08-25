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
  currentEvent: any;
  currentIndex = 0;
  title = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getAll()
      .subscribe(
        event => {
          this.events = event;
          console.log(event);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveEvents();
    this.currentEvent = null;
    this.currentIndex = 0;
  }

  setActiveEvent(event: any, index: any): void {
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
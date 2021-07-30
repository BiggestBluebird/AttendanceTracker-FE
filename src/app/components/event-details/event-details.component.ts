import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  currentEvent: Event = {
   title: '',
   violation: '',
   description: '',
   points: undefined,  
   published: false
  };
  message = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEvent(this.route.snapshot.paramMap.get('id'));
  }   

  getEvent(id): void {
    this.eventService.get(id).subscribe( data => {
          this.currentEvent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentEvent.title,
      description: this.currentEvent.description,
      published: status
    };

	this.message = '';

    this.eventService.update(this.currentEvent.id, data).subscribe( response => {
          this.currentEvent.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateEvent(): void {
	this.message = '';
	
    this.eventService.update(this.currentEvent.id, this.currentEvent).subscribe( response => {
          console.log(response);
          this.message = 'The Driver Attendance Event was updated successfully';
        },
        error => {
          console.log(error);
        });
  }

  deleteEvent(): void {
	this.eventService.delete(this.currentEvent.id).subscribe( response => {
          console.log(response);
          this.router.navigate(['/events']);
        },
        error => {
          console.log(error);
        });
  }
}
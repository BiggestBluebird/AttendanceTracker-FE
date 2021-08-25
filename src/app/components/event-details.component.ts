import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';
//import { timer } from 'rxjs';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  currentEvent: Event = {
   title: '',
   date: '',	
   violation: '',
   description: '',
   points: 1,  
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

  getEvent(id: any) {
	this.eventService.get(id).subscribe( data => {
          this.currentEvent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
	this.eventService.update(this.currentEvent.id, this.currentEvent)
		.subscribe( 
			response => {
        console.log(response);  
		this.router.navigate(['/events']);
	    },
        error => {
          console.log(error);
        });
  }

  deleteEvent() {
	this.eventService.delete(this.currentEvent.id).subscribe( response => {
          console.log(response);
          this.router.navigate(['/events']);
        },
        error => {
          console.log(error);
        });
  }
}
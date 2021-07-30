import {Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = {
	title: '',
    violation: '',
	description: '',
	points: undefined,  
    published: false
  };
  submitted = false;

  constructor(private eventService: EventService) { }
  
  ngOnInit(): void {
  }

  saveEvent(): void {
    const data = {
      title: this.event.title,
      violation: this.event.violation,
	  description: this.event.description,
	  points: this.event.points	
	  
    };

    this.eventService.create(data)
      .subscribe( 
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

   newEvent(): void {
     this.submitted = false;
     this.event = {
       title: '',
	   violation: '',	
       description: '',
	   points: undefined,
       published: false
     };
   }
}

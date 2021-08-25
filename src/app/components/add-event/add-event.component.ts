import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = {
	title: '',
	date: '',
    violation: '',
	description: '',
	points: 1,  
  };
  submitted = false;

  bsValue = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private eventService: EventService) { 

  this.datePickerConfig = Object.assign({}, { showWeekNumbers: false,
	    							          dateInputFormat: 'YYYY-MM-DD' });
  }

  ngOnInit(): void {
  }

  saveEvent(): void {
    const data = {
      title: this.event.title,
	  date: this.event.date,	
      violation: this.event.violation,
	  description: this.event.description,
	  points: this.event.points	
	  
    };

    this.eventService.create(data)
      .subscribe(response => {
          console.log("event response", response);
          this.submitted = true;
    },

        error => 
          console.log(error));
    }

   newEvent(): void {
     this.submitted = false;
     this.event = {
       title: '',
	   violation: '',	
       description: '',
	   points: undefined,
     };

   }
}

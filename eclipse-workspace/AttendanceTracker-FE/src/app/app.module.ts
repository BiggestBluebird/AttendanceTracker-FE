import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common//http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from "@angular/material/list";


import { AddEventComponent } from './components/add-event/add-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventsListComponent } from './components/events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
	EventDetailsComponent,
    EventsListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
	BsDatepickerModule.forRoot(),
	BrowserAnimationsModule,
	MatSliderModule,
	MatSelectModule,
	MatListModule
	
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

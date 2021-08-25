import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
	
@Injectable({
  providedIn: 'root'
})
export class EventService {
	
 private baseUrl = 'http://localhost:8081/api/events';	
	
  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(event: Event): Observable<any> {
	console.log("service create event", event);
    return this.http.post(`${this.baseUrl}`, event);
  }

  update(id: any, event: Event): Observable<Event> {
    return this.http.put(`${this.baseUrl}/${id}`, event);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);	
  }

  findByTitle(title: any): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}?title=${title}`);
  }
}
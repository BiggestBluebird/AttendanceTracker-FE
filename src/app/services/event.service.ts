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

  getAll(): Observable<any> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
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
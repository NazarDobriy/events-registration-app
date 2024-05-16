import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IEvent } from 'src/types/event.interface';

@Injectable()
export class EventApiService {
  private url = `${environment.apiHost}/event`;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${this.url}/all`);
  }

  getEventById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.url}/${id}`);
  }
}

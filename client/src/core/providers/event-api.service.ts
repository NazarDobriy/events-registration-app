import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IEvent } from 'src/types/event.interface';

@Injectable()
export class EventApiService {
  private url = `${environment.apiHost}/events`;

  constructor(private http: HttpClient) {}

  getPaginatedEvents(
    page: number,
    limit: number
  ): Observable<{ events: IEvent[]; totalItems: number }> {
    const params = new HttpParams().set('page', page).set('limit', limit);

    return this.http.get<{ events: IEvent[]; totalItems: number }>(this.url, {
      params
    });
  }

  getEventById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.url}/${id}`);
  }
}

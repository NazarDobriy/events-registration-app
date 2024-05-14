import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IParticipant } from 'src/types/participant.interface';

@Injectable()
export class ParticipantApiService {
  private url = `${environment.apiHost}/participant`;

  constructor(private http: HttpClient) {}

  getParticipantsByEventId(id: number): Observable<IParticipant[]> {
    return this.http.get<IParticipant[]>(`${this.url}/events/${id}`);
  }
}

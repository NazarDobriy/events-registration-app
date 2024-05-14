import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EventApiService } from 'src/core/providers/event-api.service';

import { ParticipantApiService } from 'src/core/providers/participant-api.service';
import { IParticipant } from 'src/types/participant.interface';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
})
export class ParticipantsComponent implements OnInit, OnDestroy {
  eventTitle = '';
  isLoadingEvent = true;
  isLoadingParticipants = true;
  participants: IParticipant[] = [];
  private eventId = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventApiService: EventApiService,
    private participantApiService: ParticipantApiService
  ) {}

  ngOnInit(): void {
    this.eventId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.fetchEvent();
    this.fetchParticipants();
  }

  private fetchParticipants(): void {
    this.participantApiService
      .getParticipantsByEventId(this.eventId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((participants) => {
        this.participants = participants;
        this.isLoadingParticipants = false;
      });
  }

  private fetchEvent(): void {
    this.eventApiService
      .getEventById(this.eventId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ title }) => {
        this.eventTitle = title;
        this.isLoadingEvent = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

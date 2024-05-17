import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { ParticipantApiService } from 'src/core/providers/participant-api.service';
import { EventApiService } from 'src/core/providers/event-api.service';
import { IParticipant } from 'src/types/participant.interface';
import { countRegistrationsPerDay } from './utils';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html'
})
export class ParticipantsComponent implements OnInit, OnDestroy {
  eventTitle = '';
  inputValue = '';
  isLoadingEvent = true;
  isLoadingParticipants = true;
  days: string[] = [];
  registrations: number[] = [];
  participants: IParticipant[] = [];
  optionCtrl = new FormControl<'name' | 'email'>('name');
  private eventId: number | null = null;
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
    if (this.eventId) {
      this.participantApiService
        .getParticipantsByEventId(this.eventId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((participants) => {
          this.participants = participants;
          this.handleRegistrationData();
          this.isLoadingParticipants = false;
        });
    }
  }

  private fetchEvent(): void {
    if (this.eventId) {
      this.eventApiService
        .getEventById(this.eventId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(({ title }) => {
          this.eventTitle = title;
          this.isLoadingEvent = false;
        });
    }
  }

  private handleRegistrationData(): void {
    const registrationData = countRegistrationsPerDay(this.participants);
    this.days = Object.keys(registrationData);
    this.registrations = Object.values(registrationData);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

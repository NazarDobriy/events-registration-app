import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { IEvent } from '../../types/event.interface';
import { EventApiService } from 'src/core/providers/event-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading = true;
  events: IEvent[] = [];
  private destroy$ = new Subject<void>();

  constructor(private eventApiService: EventApiService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  private fetchEvents(): void {
    this.eventApiService
      .getEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe((events) => {
        this.events = events;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

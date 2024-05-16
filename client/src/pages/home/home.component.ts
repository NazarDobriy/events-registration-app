import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';

import { IEvent } from '../../types/event.interface';
import { EventApiService } from 'src/core/providers/event-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading = true;
  events: IEvent[] = [];
  private destroy$ = new Subject<void>();

  constructor(private eventApiService: EventApiService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  handleSort(option: MatSelectChange): void {
    switch (option.value) {
      case 'title':
        this.events.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
        this.events.sort((a, b) => {
          return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
        });
        break;
      case 'organizer':
        this.events.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }
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

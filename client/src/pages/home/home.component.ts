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
  currentPage = 1;
  private totalItems = 0;
  private readonly limit = 7;
  private destroy$ = new Subject<void>();

  constructor(private eventApiService: EventApiService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  onScroll(): void {
    if (this.events.length < this.totalItems) {
      this.currentPage++;
      this.loadEvents();
    }
  }

  handleSort(option: MatSelectChange): void {
    switch (option.value) {
      case 'title':
        this.events.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
        this.events.sort((a, b) => {
          return (
            new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
          );
        });
        break;
      case 'organizer':
        this.events.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }
  }

  private loadEvents(): void {
    this.eventApiService
      .getPaginatedEvents(this.currentPage, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.events.push(...response.events);
        this.totalItems = response.totalItems;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

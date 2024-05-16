import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { IParticipant } from 'src/types/participant.interface';
import { SnackBarService } from 'src/core/providers/snack-bar.service';
import { ParticipantApiService } from 'src/core/providers/participant-api.service';

@Component({
  selector: 'app-register-participant',
  templateUrl: './register-participant.component.html'
})
export class RegisterParticipantComponent implements OnInit, OnDestroy {
  private eventId: number | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackBarService,
    private participantApiService: ParticipantApiService
  ) {}

  ngOnInit(): void {
    this.eventId = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  createParticipant(participant: IParticipant): void {
    if (this.eventId) {
      this.participantApiService
        .createParticipant({
          ...participant,
          eventId: this.eventId
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe(({ name }) => {
          const message = `Successfully created ${name} participant`;
          this.snackBarService.open(message, 'X');
          this.router.navigateByUrl(`/events/${this.eventId}/participants`);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

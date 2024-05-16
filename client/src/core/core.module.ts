import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ParticipantApiService } from './providers/participant-api.service';
import { EventApiService } from './providers/event-api.service';
import { SnackBarService } from './providers/snack-bar.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  providers: [
    ParticipantApiService,
    EventApiService,
    SnackBarService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  imports: [CommonModule, MatSnackBarModule]
})
export class CoreModule {}

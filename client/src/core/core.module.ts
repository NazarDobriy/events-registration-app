import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ParticipantApiService } from './providers/participant-api.service';
import { EventApiService } from './providers/event-api.service';
import { SnackBarService } from './providers/snack-bar.service';

@NgModule({
  providers: [ParticipantApiService, EventApiService, SnackBarService],
  imports: [CommonModule, MatSnackBarModule],
})
export class CoreModule {}

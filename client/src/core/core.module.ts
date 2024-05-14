import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantApiService } from './providers/participant-api.service';
import { EventApiService } from './providers/event-api.service';

@NgModule({
  providers: [ParticipantApiService, EventApiService],
  imports: [CommonModule],
})
export class CoreModule {}

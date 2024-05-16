import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantsComponent } from '../participants/participants.component';
import { ParticipantCardComponent } from './components/participant-card/participant-card.component';
import { SharedModule } from 'src/shared/shared.module';
import { SearchParticipantsPipe } from './pipes/search-participants.pipe';

const routes: Routes = [{ path: '', component: ParticipantsComponent }];

@NgModule({
  declarations: [
    ParticipantsComponent,
    ParticipantCardComponent,
    SearchParticipantsPipe
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ParticipantsModule {}

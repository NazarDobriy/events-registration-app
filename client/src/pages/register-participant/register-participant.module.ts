import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/shared/shared.module';
import { RegisterParticipantComponent } from './register-participant.component';
import { RegisterParticipantFormComponent } from './components/register-participant-form/register-participant-form.component';

const routes: Routes = [{ path: '', component: RegisterParticipantComponent }];

@NgModule({
  declarations: [
    RegisterParticipantComponent,
    RegisterParticipantFormComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class RegisterParticipantModule {}

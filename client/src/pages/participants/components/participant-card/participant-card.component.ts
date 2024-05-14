import { Component, Input } from '@angular/core';

import { IParticipant } from 'src/types/participant.interface';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html'
})
export class ParticipantCardComponent {
  @Input() participant: IParticipant | null = null;
}

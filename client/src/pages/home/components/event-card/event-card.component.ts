import { Component, Input } from '@angular/core';

import { IEvent } from '../../../../types/event.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event: IEvent | null = null;
}

import { Controller, Get } from '@nestjs/common';

import { EventService } from './event.service';
import { Event } from './event.model';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get('all')
  getAll(): Promise<Event[]> {
    return this.eventService.getAll();
  }
}

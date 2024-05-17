import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

import { EventService } from './event.service';
import { Event } from './event.model';

@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  getEvents(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number
  ): Promise<{ events: Event[]; totalItems: number }> {
    return this.eventService.getPaginatedEvents(page, limit);
  }

  @Get(':id')
  getEventById(@Param('id', ParseIntPipe) id: number): Promise<Event> {
    return this.eventService.getEventById(id);
  }
}

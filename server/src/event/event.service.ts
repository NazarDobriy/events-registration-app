import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Event } from './event.model';
import { Participant } from 'src/participant/participant.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepository: typeof Event) {}

  async getAll(): Promise<Event[]> {
    const events = await this.eventRepository.findAll({
      include: [Participant],
      order: [['id', 'ASC']]
    });
    return events;
  }

  async getPaginatedEvents(
    page: number = 1,
    limit: number = 7
  ): Promise<{ events: Event[]; totalItems: number }> {
    const offset = (page - 1) * limit;

    const [events, totalItems] = await Promise.all([
      this.eventRepository.findAll({
        limit,
        offset
      }),
      this.eventRepository.count()
    ]);

    return { events, totalItems };
  }

  async getEventById(id: number): Promise<Event> {
    const event = await this.eventRepository.findByPk(id);
    return event;
  }
}

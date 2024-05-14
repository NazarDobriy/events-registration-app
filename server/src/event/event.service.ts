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
}

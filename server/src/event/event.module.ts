import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Event } from './event.model';
import { Participant } from 'src/participant/participant.model';

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports: [SequelizeModule.forFeature([Event, Participant])]
})
export class EventModule {}

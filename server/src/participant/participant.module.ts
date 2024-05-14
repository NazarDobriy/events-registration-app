import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.model';
import { Event } from '../event/event.model';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService],
  imports: [SequelizeModule.forFeature([Participant, Event])]
})
export class ParticipantModule {}

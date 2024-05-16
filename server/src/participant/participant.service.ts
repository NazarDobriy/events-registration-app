import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Participant } from './participant.model';
import { ParticipantDto } from './dto/participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel(Participant) private participantRepository: typeof Participant
  ) {}

  async create(dto: ParticipantDto): Promise<Participant> {
    const participant = await this.participantRepository.create(dto);
    return participant;
  }

  async getParticipantsByEventId(id: number): Promise<Participant[]> {
    const participant = await this.participantRepository.findAll({
      where: { eventId: id }
    });
    return participant;
  }
}

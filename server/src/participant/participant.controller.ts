import { Body, Controller, Post } from '@nestjs/common';

import { ParticipantDto } from './dto/participant.dto';
import { ParticipantService } from './participant.service';
import { Participant } from './participant.model';

@Controller('participant')
export class ParticipantController {
  constructor(private participantService: ParticipantService) {}

  @Post()
  create(@Body() dto: ParticipantDto): Promise<Participant> {
    return this.participantService.create(dto);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe
} from '@nestjs/common';

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

  @Get('events/:id')
  getParticipantsByEventId(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Participant[]> {
    return this.participantService.getParticipantsByEventId(id);
  }
}

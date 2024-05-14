import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventModule } from './event/event.module';
import { Event } from './event/event.model';
import { ParticipantModule } from './participant/participant.module';
import { Participant } from './participant/participant.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Event, Participant],
      autoLoadModels: true
    }),
    EventModule,
    ParticipantModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';

import { Event } from 'src/event/event.model';

interface ParticipantCreationAttr {
  name: string;
  email: string;
  birthDate: Date;
  referralSource: string;
  eventId: number;
}

@Table({ tableName: 'Participant' })
export class Participant extends Model<Participant, ParticipantCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  birthDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  referralSource: string;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;
}

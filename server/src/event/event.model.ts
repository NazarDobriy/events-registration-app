import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Participant } from 'src/participant/participant.model';

interface EventCreationAttr {
  title: string;
  description: string;
  eventDate: Date;
  organizer: string;
}

@Table({ tableName: 'Event' })
export class Event extends Model<Event, EventCreationAttr> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  eventDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  organizer: string;

  @HasMany(() => Participant)
  participants: Participant[];
}

import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class ParticipantDto {
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly email: string;
  @IsNotEmpty()
  readonly birthDate: Date;
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly referralSource: string;
  @IsNotEmpty()
  @Min(1)
  readonly eventId: number;
}

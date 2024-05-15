export interface IParticipant {
  id?: number;
  name: string;
  email: string;
  birthDate: Date;
  referralSource: string;
  eventId?: number;
}

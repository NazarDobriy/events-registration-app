import { IParticipant } from 'src/types/participant.interface';

export function countRegistrationsPerDay(
  participants: IParticipant[]
): Record<string, number> {
  return participants.reduce((acc, participant) => {
    if (participant.createdAt) {
      const date = participant.createdAt.split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
}

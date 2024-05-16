import { Pipe, PipeTransform } from '@angular/core';

import { IParticipant } from 'src/types/participant.interface';

@Pipe({
  name: 'searchParticipants'
})
export class SearchParticipantsPipe implements PipeTransform {
  transform(
    participants: IParticipant[],
    searchValue: string,
    searchField: 'name' | 'email'
  ): IParticipant[] {
    if (!participants.length || !searchValue) {
      return participants;
    }

    searchValue = searchValue.trim().toLowerCase();

    return participants.filter((participant: IParticipant) => {
      const fieldValue = participant[searchField].toLowerCase();
      return fieldValue.includes(searchValue);
    });
  }
}

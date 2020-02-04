import { Pipe, PipeTransform } from '@angular/core';
import {UserIdentifier} from '../../src/app/models/user-identifier'
@Pipe({
  name: 'noteSearchPipe'
})
export class NoteSearchPipePipe implements PipeTransform {

  transform(allNote: any[], searchTerm: string): any {
    if (!allNote || !searchTerm) {
      return allNote;
    }
    return allNote.filter(data =>
      data.noteTitle.toLowerCase().indexOf(searchTerm) !== -1
      || data.description.toLowerCase().indexOf(searchTerm) !== -1)
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/Character';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {
  transform(characters:Character[], pagec:number=0) : Character[] {
    return characters?.slice(pagec, pagec+6)
  }
}

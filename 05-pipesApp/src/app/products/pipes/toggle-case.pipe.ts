import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,


  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value.toUpperCase();
  }


}

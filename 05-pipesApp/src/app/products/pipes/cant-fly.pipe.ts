import {Pipe, PipeTransform} from '@angular/core';

@Pipe({


  name: 'cantFly'
})

export class CantFlyPipe implements PipeTransform {

  transform(value: boolean,): 'vuela' | 'no vuela' {
    return value ? 'vuela' : 'no vuela';
  }


}







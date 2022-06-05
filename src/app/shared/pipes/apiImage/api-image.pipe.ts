import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiImage'
})
export class ApiImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return 'https://localhost:44316/Images/' + value;
  }

}

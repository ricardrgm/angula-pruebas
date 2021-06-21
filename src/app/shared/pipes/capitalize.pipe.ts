import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    try {

      let newv = value
        .split(' ')
        .map(element =>
          element.split('')[0]
            .toUpperCase()
            .concat(element
              .slice(1))
        )
        .join(' ');

      return newv;

    } catch (error) {
      throw error;
    }
  }

}

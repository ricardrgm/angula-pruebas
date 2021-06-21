import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    try {
      if (!items) {
        return [];
      }
      if (!value) {
        return items;
      }
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp
      const myPattern = new RegExp(value, 'i');
      return items.filter(it => it[field].match(myPattern));

    } catch (error) {
      throw error;
    }
  }
}

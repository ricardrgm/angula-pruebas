import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  transform(value: string, nIterator: number): string {
    try {
      let nString = value.trim();
      if (nIterator != null) {
        let nArray = this.getStringtoArrayByWords(nString);
        if (nIterator < nArray.length) {
          nString = this.getReduceStringfromArray(nArray, Number(nIterator));
        }
      }
      return nString;
    } catch (error) {
      throw error;
    }
  }

  getStringtoArrayByWords(s: string): Array<string> {
    return s.split(' '); //splits the text up in chunks
  }

  getReduceStringfromArray(array: Array<string>, iterator: number): string {
    let i = 1;
    let newString = array.reduce((total, next) => {
      if (i <= iterator) { total = total + " " + next; }
      i++;
      return total;
    }, "");

    return newString.trim().concat("...");
  }


}

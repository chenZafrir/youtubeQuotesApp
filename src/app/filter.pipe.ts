import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    let results = items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    if(results.length > 0){
      return results;
    }else{
      return [-1]
    }
  }
}

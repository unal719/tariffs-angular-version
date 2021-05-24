import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Injectable()
@Pipe({
  name: 'listAscDescSort',
})
export class ListAscDescSortFilterPipe implements PipeTransform {
  transform(items: any[], key: string, type: string): any[] {
    if (!items) return [];
    if (key === '' && type === '') {
      return items;
    }

    switch (type) {
      case 'asc':
        items.sort((a, b) => {
          return a[key] - b[key];
        });
        break;
      case 'desc':
        items.sort((a, b) => {
          return b[key] - a[key];
        });
        break;
      default:
        break;
    }
    return items;
  }
}

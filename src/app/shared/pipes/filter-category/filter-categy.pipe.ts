import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../../../core/interfaces/product.interface';
import { Product } from '../../../core/models/product.model';

@Pipe({
  name: 'filterCategy'
})
export class FilterCategyPipe implements PipeTransform {

  transform(items: Array<Product>, categoryToSearch: Category ): Array<any> {
    if (!categoryToSearch) {
      return items;
    }
    return items.filter( category  => category.category.id === categoryToSearch.id)
  }

}

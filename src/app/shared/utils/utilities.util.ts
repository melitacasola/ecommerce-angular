import { Category } from "../../core/interfaces/product.interface";
import { Product } from "../../core/models/product.model";
import { User } from "../../core/models/user.model";

export class Utilities {

  searchFn(searchTerm: string, list:(Product | User)[]){
    return list.filter( item => item.getSearchValue().includes(searchTerm))
  }

  filterCategoryFn(items: Array<Product>, categoryToSearch: Category ): Array<any> {
    if (!categoryToSearch) {
      return items;
    }
    return items.filter(item => item.category.id === categoryToSearch.id)
  }
}

import { Product } from "../../core/models/product.model";
import { User } from "../../core/models/user.model";

export class Utilities {

  searchFn(searchTerm: string, list:(Product | User)[]){
    return list.filter( item => item.getSearchValue().includes(searchTerm))




  }
}

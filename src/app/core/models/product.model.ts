import { Category, IProduct } from "../interfaces/product.interface";

export class Product implements IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];

  constructor(product: IProduct){
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.category = product.category;
    this.images = product.images;
  }

  getSearchValue(){
    return this.title.toLowerCase();
  }
}

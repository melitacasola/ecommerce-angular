import { Component, inject, Inject, OnInit } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { Category, IProduct } from '../../../../core/interfaces/product.interface';
import { Router } from '@angular/router';
import { Utilities } from '../../../../shared/utils/utilities.util';
import { Product } from '../../../../core/models/product.model';
import { User } from '../../../../core/models/user.model';
import { IUser } from '../../../../core/interfaces/user.interface';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit{
  private productsService = inject( GenericService<IProduct> );
  private router = inject(Router);

  public infoProducts: Product[] = [];
  public filterProduct: Product[] = [];
  public categoriesList: Category[] = [];
  public utilsSearch = new Utilities();

  ngOnInit(): void {
    this.productsService.getList().subscribe((res) => {res.forEach((item) => {
      console.log(res);
      this.infoProducts.push(new Product(item));
      this.filterProduct = this.infoProducts
    }
  )})
  }

  goToDetails(id: number): void {
    this.router.navigate([`/home/products/${id}`])
  }

  searchTerm(term: string): void {
    this.filterProduct = this.utilsSearch.searchFn(term, this.infoProducts) as Product[];
  }

  onCategorySelected(category: Category): void {
    console.log('Selected category:', category);
    // Aquí puedes filtrar productos según la categoría seleccionada
  }
}

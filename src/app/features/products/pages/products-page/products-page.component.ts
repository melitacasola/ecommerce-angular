import { Component, inject, OnInit } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { Category, IProduct } from '../../../../core/interfaces/product.interface';
import { Router } from '@angular/router';
import { Utilities } from '../../../../shared/utils/utilities.util';
import { Product } from '../../../../core/models/product.model';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit{
  private productsService = inject( GenericService<IProduct> );
  private router = inject(Router);
  private categoriesService = inject( GenericService<Category> )

  public infoProducts: Product[] = [];
  public filterProduct: Product[] = [];
  public categoriesList: Category[] = [];
  public utilsSearch = new Utilities();
  public currentCategory: number = 0

  ngOnInit(): void {
    this.productsService.getList(8, 0).subscribe((res) => {res.forEach((item) => {
      this.infoProducts.push(new Product(item));
      this.filterProduct = this.infoProducts
    }
  )})
  this.categoriesService.getCategory().subscribe(res => {
        this.categoriesList = res.map(category => {
          return {
            ...category,
            name: category.name || 'Sin nombre',
          };

        });
      })
  }

  goToDetails(id: number): void {
    this.router.navigate([`/home/products/${id}`])
  }

  searchTerm(term: string): void {
    this.filterProduct = this.utilsSearch.searchFn(term, this.infoProducts) as Product[];
  }

  onCategory(category: Category): void {
    //filtro sobre la lista original
    this.filterProduct = this.utilsSearch.filterCategoryFn(this.infoProducts, category);
  }
}

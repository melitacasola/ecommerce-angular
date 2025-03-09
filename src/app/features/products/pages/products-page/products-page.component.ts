import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Category,
  IProduct,
} from '../../../../core/interfaces/product.interface';
import { Product } from '../../../../core/models/product.model';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { Utilities } from '../../../../shared/utils/utilities.util';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  private productsService = inject(GenericService<IProduct>);
  private router = inject(Router);
  private categoriesService = inject(GenericService<Category>);

  public infoProducts: Product[] = [];
  public filterProduct: Product[] = [];
  public categoriesList: Category[] = [];
  public utilsSearch = new Utilities();
  public currentCategory: number = 0;
  products$ = this.productsService.products$;

  ngOnInit(): void {
    this.categoriesService.getCategory().subscribe((res) => {
      this.categoriesList = res.map((category) => {
        return {
          ...category,
          name: category.name || 'Sin nombre',
        };
      });
    });
  }

  goToDetails(id: number): void {
    this.router.navigate([`/home/products/${id}`]);
  }

  searchTerm(term: string): void {
    this.filterProduct = this.utilsSearch.searchFn(
      term,
      this.infoProducts
    ) as Product[];
  }

  onCategory(category: Category): void {
    //filtro sobre la lista original
    this.filterProduct = this.utilsSearch.filterCategoryFn(
      this.infoProducts,
      category
    );
  }
}

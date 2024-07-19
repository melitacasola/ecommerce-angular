import { Component, inject, Inject, OnInit } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { IProduct } from '../../../../core/interfaces/product.interface';
import { Router } from '@angular/router';
import { Utilities } from '../../../../shared/utils/utilities.util';
import { Product } from '../../../../core/models/product.model';
import { User } from '../../../../core/models/user.model';

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
  public utilsSearch = new Utilities();

  ngOnInit(): void {
    this.productsService.getList().subscribe((res) => {res.forEach((item) => {this.infoProducts.push(new Product(item)); this.filterProduct = this.infoProducts} )})
  }

  goToDetails(id: number): void {
    this.router.navigate([`/home/products/${id}`])
  }

  searchTerm(term: string): void {
    this.filterProduct = this.utilsSearch.searchFn(term, this.infoProducts) as Product[]
  }
}

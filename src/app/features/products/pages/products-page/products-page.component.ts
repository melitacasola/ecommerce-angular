import { Component, inject, Inject, OnInit } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { IProduct } from '../../../../core/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit{
  private productsService = inject( GenericService<IProduct> ); 
  private router = inject(Router);
  public infoProducts: IProduct[] = [];

  ngOnInit(): void {
    this.productsService.getList().subscribe((res) => {this.infoProducts = res, console.log(res)})
    
  }

  goToDetails(id: number): void {
    this.router.navigate([`/home/products/${id}`])
  }
}

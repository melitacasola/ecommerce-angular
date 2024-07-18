import { Component, Inject } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { IProduct } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  constructor(
    @Inject('productsService') private productsService: GenericService<IProduct>
  ) {
    productsService.getList().subscribe((res) => console.log(res))
  }
}

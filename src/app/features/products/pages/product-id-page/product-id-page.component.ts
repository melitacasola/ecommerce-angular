import { Component, Inject } from '@angular/core';
import { IProduct } from '../../../../core/interfaces/product.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';

@Component({
  selector: 'app-product-id-page',
  templateUrl: './product-id-page.component.html',
  styleUrl: './product-id-page.component.scss'
})
export class ProductIdPageComponent {
  constructor(
    @Inject('productsService') private productsService: GenericService<IProduct>
  ) {
    productsService.getById(22).subscribe((res) => console.log(res))
  }
}

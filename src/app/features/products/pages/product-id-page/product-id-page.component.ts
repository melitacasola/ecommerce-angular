import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/interfaces/product.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id-page',
  templateUrl: './product-id-page.component.html',
  styleUrl: './product-id-page.component.scss'
})
export class ProductIdPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productsService = inject(GenericService<IProduct>);
  private productId!: number;
  public infoProduct!: IProduct;

  ngOnInit(): void {
    this.getProductId();
    this.getProductById(this.productId);
  }

  getProductId(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = Number(params.get('id'));
    });
  }

  getProductById(id: number): void {
    this.productsService.getById(id).subscribe((res) => {
      this.infoProduct = res, console.log(res);
    })
  }

}

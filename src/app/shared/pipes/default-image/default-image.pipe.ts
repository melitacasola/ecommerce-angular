import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product.interface';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform( product: IProduct ): string {
    if( !product || !product.images || product.images.length === 0 ) {
      //añadimos una imagen que queremos que se muestre al no encontrarla de al api
      return 'assets/default-image.jpg';
    }
    return product.images[0];
    // //aqui nos devuelve la url de la imagen tanto si existe como si no
    // if( product.images ): string[] {
    //   return product.images[]; 
    // } 
    // return `assets/heroes/${ product.id }.jpg`;
  }

}

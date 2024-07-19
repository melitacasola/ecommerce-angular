import { inject, Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  private sanitizer = inject( DomSanitizer );

  // transform(product: IProduct): string {
  //   let imageUrl: string;

  //   if (!product || !product.images || product.images.length === 0 || !product.images[0]) {
  //     imageUrl = 'assets/default-image.jpg';
  //   } else {
  //     imageUrl = product.images[0];
  //   }

  //   return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
  // }
  
// ========================================================================================= //
  //chaty
  transform(imageUrl: string): SafeUrl {
    // Verifica si la URL de la imagen es válida; si no lo es, usa la imagen por defecto
    const defaultImageUrl = 'assets/default-image.jpg';
    const urlToUse = imageUrl && imageUrl.trim() ? imageUrl : defaultImageUrl;
    
    // Usa el sanitizador para evitar problemas de seguridad
    return this.sanitizer.bypassSecurityTrustUrl(urlToUse);
  }
}

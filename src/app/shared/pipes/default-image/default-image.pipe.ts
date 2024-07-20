import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(imageUrl: string): SafeUrl {
    let sanitizedUrl: string;

    if (imageUrl && imageUrl.includes('[')) {
      sanitizedUrl = imageUrl.split('[')[0];
    } else {
      sanitizedUrl = imageUrl;
    }

    if (!sanitizedUrl || sanitizedUrl.trim() === '') {
      sanitizedUrl = 'assets/default-image.jpg';
    }

    return this.sanitizer.bypassSecurityTrustUrl(sanitizedUrl);
  }
}


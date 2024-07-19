import { Component, inject } from '@angular/core';
import { GenericService } from '../../../core/services/genericService/generic.service';
import { Category } from '../../../core/interfaces/product.interface';

@Component({
  selector: 'shared-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss'
})
export class CategoryMenuComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  private categoriesService = inject( GenericService<Category> );
  categoriesList: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getList().subscribe(res => {
      this.categoriesList = res;
      console.log(this.categoriesList);


    })
  }
}

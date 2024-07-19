import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../../../core/interfaces/product.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.scss'
})
export class CategoriesFilterComponent implements OnInit{

  private categoriesService = inject( GenericService<Category> );
  categoriesList: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getCategory().subscribe(res => {
      this.categoriesList = res.map(category => {
        return {
          ...category,
          name: category.name || 'Sin nombre',
        };
      });
    })
  }

  // @Input() categoriesList: Category[] = [];
  // @Output() categorySelected = new EventEmitter<Category>();

  // onCategorySelect(category: Category): void {
  //   this.categorySelected.emit(category);
  // }
}

import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../core/interfaces/product.interface';


@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.scss'
})
export class CategoriesFilterComponent {

  @Input() categoriesList: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();

  onCategorySelect(category: Category) {
    this.categorySelected.emit(category);
  }
}

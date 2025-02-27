import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/models/user.model';
import { Product } from '../../../core/models/product.model';
import { IProduct } from '../../../core/interfaces/product.interface';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'shared-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent {
  @Input() columnHeaders: string[] = [];
  @Input() dataSource: IUser[] | Product[] = [];
  @Input() imageColumns: string[] = [];

  @Output() edit = new EventEmitter<{ id: number; user: IUser }>();
  @Output() delete = new EventEmitter<number>();

  public displayedColumns: string[] = [];
  matDataSource = new MatTableDataSource<IUser | Product>();

  ngOnInit(): void {
    this.displayedColumns = this.columnHeaders;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.matDataSource.data = this.dataSource;
    }
  }

  onEdit(user: IUser) {
    this.edit.emit({ id: user.id, user });
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}

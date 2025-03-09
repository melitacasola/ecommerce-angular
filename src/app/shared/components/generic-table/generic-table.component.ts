import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../../../core/interfaces/user.interface';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'shared-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
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

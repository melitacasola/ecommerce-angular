import { Component, inject } from '@angular/core';
import { IUser } from '../../../../core/interfaces/user.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserComponent } from '../components/edit-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
  private usersService = inject( GenericService<IUser> );
  public infoUser: IUser[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'avatar', 'actions'];
  dataSource = new MatTableDataSource<IUser>();
  private snackBar = inject( MatSnackBar );
  private dialog = inject( MatDialog );

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getList().subscribe( (data: IUser[]) => {
      this.dataSource.data = data;
    })
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.usersService.remove(id).subscribe(() => {
        this.loadUsers();
        this.snackBar.open('User deleted successfully', 'Close', {
          duration: 2000,
        });
      });
    }
  }

  editUser(user: IUser): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.update(result).subscribe(() => {
          this.loadUsers();
          this.snackBar.open('User updated successfully', 'Close', {
            duration: 2000,
          });
        });
      }
    });
  }

}

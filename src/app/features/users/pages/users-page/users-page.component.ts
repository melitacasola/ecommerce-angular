import { Component, inject, OnInit } from '@angular/core';
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
export class UsersPageComponent implements OnInit {
  private usersService = inject( GenericService<IUser> );
  private snackBar = inject( MatSnackBar );
  private dialog = inject( MatDialog );

  dataSource = new MatTableDataSource<IUser>();
  public infoUser: IUser[] = [];
  public columnHeaders: string[] = ['id', 'name', 'email', 'role', 'avatar', 'actions'];
  public imageColumns: string[] = ['avatar'];

  ngOnInit(): void {
    this.loadUsers();

  }

  loadUsers(): void {
    this.usersService.getList(100,0).subscribe( (data: IUser[]) => {
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

  editUser(id: number, user: IUser): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      height: '480px',
      data: user
    });
    console.log('entra¿¿¿?==', user);
    console.log('entra¿¿¿?==', id);


    dialogRef.afterClosed().subscribe(resp => {
      console.log('antes del log',resp);

      if (id) {
        console.log('demtro if', id);
        console.log('demtro if', user);

        this.usersService.update(id, user).subscribe(() => {
          this.loadUsers();
          this.snackBar.open('User updated successfully', 'Close', {
            duration: 2000,
          });
        })

      }
    });
  }

}

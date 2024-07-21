import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../../../core/interfaces/user.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { MatTableDataSource } from '@angular/material/table';
import { EditUserComponent } from '../components/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  private usersService = inject( GenericService<IUser> );
  private dialog = inject( MatDialog );
  private toastrService = inject(ToastrService);

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
        this.toastrService.success('User deleted successfully', 'Success');
      });
    }
  }

  editUser(id: number, user: IUser): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      height: '480px',
      data: { ...user }
    });
    console.log('ESTOS SIN MODIFICAR', user);
    console.log('ESTE ES EL ID DEL USUARIO', id);


    dialogRef.afterClosed().subscribe(editedUser => {
      console.log('ESTE ES EL NUEVO USUARIO',editedUser);

      if (editedUser) {
        console.log('DENTRO DE MI IF TENGO ESTE ID', editedUser.id);

        this.usersService.update(id, editedUser).subscribe(() => {
          this.loadUsers();
        })
        this.toastrService.success('User updated successfully!', 'Success');
      } else {
        this.toastrService.warning('User not updated!', 'Warning');
      }
    });
  }

}

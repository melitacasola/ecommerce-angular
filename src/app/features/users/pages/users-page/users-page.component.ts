import { Component, inject } from '@angular/core';
import { IUser } from '../../../../core/interfaces/user.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
  private usersService = inject( GenericService<IUser> );

  ngOnInit(): void {
    this.usersService.getList().subscribe((res) => console.log(res, 'llega esto??¿¿'))
  }
}

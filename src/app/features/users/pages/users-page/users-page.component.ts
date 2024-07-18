import { Component, Inject } from '@angular/core';
import { IUser } from '../../../../core/interfaces/user.interface';
import { GenericService } from '../../../../core/services/genericService/generic.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

  constructor(
    @Inject('usersService') private usersService: GenericService<IUser>
  ) {
    usersService.getList().subscribe((res) => console.log(res))
  }
}

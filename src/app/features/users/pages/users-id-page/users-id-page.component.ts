import { Component, inject, Inject } from '@angular/core';
import { GenericService } from '../../../../core/services/genericService/generic.service';
import { IUser } from '../../../../core/interfaces/user.interface';

@Component({
  selector: 'app-users-id-page',
  templateUrl: './users-id-page.component.html',
  styleUrl: './users-id-page.component.scss'
})
export class UsersIdPageComponent {
  private usersService = inject( GenericService<IUser> ); 

  ngOnInit(): void {
    this.usersService.getById(22).subscribe((res) => console.log(res))
  }
}

import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../core/interfaces/user.interface';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
    dialogRef = inject(MatDialogRef<EditUserComponent>);
  @Inject(MAT_DIALOG_DATA) 
  public data!: IUser;

  onNoClick(): void {
    this.dialogRef.close();
  }
}

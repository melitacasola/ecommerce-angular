import { Component, EventEmitter, Inject, inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../core/interfaces/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  dialogRef = inject(MatDialogRef<EditUserComponent>);
  @Inject(MAT_DIALOG_DATA)

  @Output() sendChange = new EventEmitter<IUser>

  public data!: IUser;
  public formGenericTemplate!: FormGroup
  private genericForm = inject(FormBuilder)

  ngOnInit(): void {
    this.formGenericTemplate = this.genericForm.group({
      email: [''],
      name:  [''],
      password: [''],
      role:  [''],
      avatar:  [''],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveChange(): void {
    // const updatedData: IUser = {
    //   ...this.data,
    //   ...this.formGenericTemplate.value
    // };
    console.log(this.formGenericTemplate.value);
    // console.log(updatedData, 'updatetdata');

    // this.dialogRef.close(updatedData);
  }


}

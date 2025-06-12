import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

//Angular Materials
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cerrarDialog() {
    this.dialogRef.close();
  }

}

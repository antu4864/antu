import { Component, OnInit,EventEmitter,Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss'
})
export class UsernameComponent {
  
  username: string = '';
  result:any;

  constructor(private dialogRef: MatDialogRef<UsernameComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }
 @Output() closePanels  = new EventEmitter();
  ok(){
    localStorage.setItem("initialLoad","2");
    sessionStorage.setItem("fname", this.username); // Save the entered username in the local storage
    this.dialogRef.close(this.username);
  }

  close(){
    this.dialogRef.close();
  }
}





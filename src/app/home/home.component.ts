import { Component } from '@angular/core';
import Typed from 'typed.js';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsernameComponent } from './widget/username/username.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  greeting: any;
  person: any;


  constructor(public dialog: MatDialog) { }

  usernameBox() {
    let dilogBox = null;
    if (localStorage.getItem("initialLoad") === "1") {
      dilogBox = this.dialog.open(UsernameComponent, {
        // disableClose: true,
        width: '36vw'
      });

      dilogBox?.afterClosed().subscribe((result) => {
        // console.log(result)
        this.person = result;

      })



    }

  }



  ngOnInit() {
    this.person = sessionStorage.getItem('fname');
    // this.usernameBox()
    const options = {
      strings: ['Angular Developer', 'UI Developer', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };
    const typed = new Typed('#typed-text', options);



    // greeting code

    const timenow = new Date().getHours();
    if (timenow >= 0 && timenow < 12) {
      this.greeting = "Good Morning"
    }
    else if (timenow >= 12 && timenow < 15) {
      this.greeting = "Good Afternoon"
    }
    else {
      this.greeting = "Good Evening"
    }


  }




}

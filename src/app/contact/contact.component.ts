import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  person:any;

  ngOnInit() {
   this.person =  sessionStorage.getItem('fname');
  }



}

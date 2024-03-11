import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  

  constructor(){
    localStorage.setItem("initialLoad","1");
    sessionStorage.clear();
  }


  // Loader show/hide
  ngOnInit() {
    this.hideAnimatedDiv()
 }

 isDisplayed = true;
  hideAnimatedDiv() {
    setTimeout(() => {
        this.isDisplayed = false;
    }, 2000);
}
}

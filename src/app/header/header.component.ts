import { Component, HostListener, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { AlldataService } from '../services/alldata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {

  
  // Header Fixed
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 5;
  }

  // Responsive Menu Open
  rightPanelClick:boolean = false;
  rightPanelActive:boolean = false;
  onRightPanelClick(event:any){
    this.rightPanelClick = true;
    this.rightPanelActive = !this.rightPanelActive;
    event.preventDefault();
  }



  menu: any[] = [];

  constructor(private DataService: AlldataService) { }

  ngOnInit(): void {
    this.menu = this.DataService.getMenu();
  }
  
  

}

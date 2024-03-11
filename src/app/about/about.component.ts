import { Component, OnInit } from '@angular/core';
import {AlldataService} from '../services/alldata.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit  {

  educations: any[] = [];
  skills: any[] = [];
  tools: any[] = [];

  constructor(private DataService: AlldataService) { }

  ngOnInit(): void {
    this.educations = this.DataService.getEducation();
    this.skills = this.DataService.getSkill();
    this.tools = this.DataService.getTool();
  }


   
  

}

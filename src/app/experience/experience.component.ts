import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../services/alldata.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent implements OnInit  {

  experiences: any[] = [];

  constructor(private DataService: AlldataService) { }

  ngOnInit(): void {
    this.experiences = this.DataService.getExperience();
  }


   
  

}

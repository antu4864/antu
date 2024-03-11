import { Component } from '@angular/core';
import {AlldataService} from '../services/alldata.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects: any[] = [];

  constructor(private DataService: AlldataService) { }

  ngOnInit(): void {
    this.projects = this.DataService.getProject();
  }

}

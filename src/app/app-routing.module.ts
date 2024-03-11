import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  
  
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // scrollPositionRestoration: 'top',
    }),
    // SharedModule,
  ],
  
  // declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  // entryComponents: COMPONENTS_DYNAMIC,
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }

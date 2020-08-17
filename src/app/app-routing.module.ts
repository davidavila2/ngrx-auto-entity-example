import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectsItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

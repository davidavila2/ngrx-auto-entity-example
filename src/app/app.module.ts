import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects/projects-detail/projects-detail.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsDetailComponent,
    ProjectsListComponent,
    ProjectsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

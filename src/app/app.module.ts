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
import { Projects } from './models/projects-model';
import { ProjectService } from './services/projects-service/projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { EntityService } from './services/entity.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StateModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide: Projects,
      useClass: EntityService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

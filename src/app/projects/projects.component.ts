import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/projects-model';
import { Observable } from 'rxjs';
import { ProjectFacade } from '../state/projects-state/project.facade';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Projects[]> = this.projectsFacade.all$;
  selectedProject: Projects;
  project: Projects;
  constructor(private projectsFacade: ProjectFacade) { }

  resetProject() {
    const emptyProject: Projects = {
      id: null,
      title: '',
      details: '',
      importanceLevel: 0
    };
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.projectsFacade.loadAll(this.project);
    this.resetProject();
  }

  selectProject(project: Projects) {
    this.selectedProject = project;
    console.log(project, 'lol ');
    this.projectsFacade.select(project);
  }

  saveProject(project: Projects) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project: Projects) {
    this.projectsFacade.update(project);
  }

  createProject(project: Projects) {
    console.log(project, 'due');
    this.projectsFacade.create(project);
  }

  deleteProject(project) {
    this.projectsFacade.delete(project);
  }

  cancel() {
    this.resetProject();
  }
}

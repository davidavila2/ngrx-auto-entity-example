import { Component, OnInit } from '@angular/core';
import { Project } from '../models/projects-model';
import { ProjectService } from '../services/projects-service/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<any>;
  selectedProject: Project;

  constructor(private projectsService: ProjectService) { }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      importanceLevel: 0
    };
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
      });
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(() => this.getProjects());
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  cancel() {
    this.getProjects();
    this.resetProject();
  }
}

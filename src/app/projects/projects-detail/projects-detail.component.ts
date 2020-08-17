import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent {
  currentProject;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if (value) { this.originalTitle = value.title; }
    this.currentProject = Object.assign({}, value);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/projects-service/projects.service';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/models/projects-model';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _project$: Observable<any>;
  public get project$() {
    return this._project$;
  }
  public set project$(value) {
    this._project$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.project$ = this.projectService.load(id);
    });
  }

  goBackToProjects() {
    this.router.navigate(['/projects']);
  }
}

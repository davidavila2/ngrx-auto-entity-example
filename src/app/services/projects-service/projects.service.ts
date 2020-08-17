import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/projects-model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://my-30-x-30-database.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getUrl(): string {
    return `${BASE_URL}${this.model}`;
  }

  findOne(projectId: number): Observable<object> {
    return this.httpClient.get(this.getUrlForId(projectId));
  }

  all(): Observable<object> {
    return this.httpClient.get(this.getUrl());
  }

  create(project: Project): Observable<object> {
    return this.httpClient.post(this.getUrl(), project);
  }

  getUrlForId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  update(project: Project): Observable<object> {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(this.getUrlForId(id));
  }
}

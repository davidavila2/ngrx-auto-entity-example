import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../../models/projects-model';
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

  load(projectId: number): Observable<object> {
    return this.httpClient.get(this.getUrlForId(projectId));
  }

  loadAll(): Observable<object> {
    return this.httpClient.get(this.getUrl());
  }

  create(project: Projects): Observable<object> {
    return this.httpClient.post(this.getUrl(), project);
  }

  getUrlForId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  update(project: Projects): Observable<object> {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(this.getUrlForId(id));
  }
}

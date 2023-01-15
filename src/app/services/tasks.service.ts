import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tasks } from '../models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getAllTasks (): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseApiUrl + '/api/Tasks');
  }
}

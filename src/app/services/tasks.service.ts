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

  addTasks(addTaskRequest: Tasks): Observable<Tasks> {
    addTaskRequest.id = '00000000-0000-0000-0000-000000000000'; /* Маска для рандомного айди задачи */
    return this.http.post<Tasks>(this.baseApiUrl + '/api/Tasks', addTaskRequest);
  }

  getTask(id: string): Observable<Tasks> {
    return this.http.get<Tasks>(this.baseApiUrl + '/api/Tasks/' + id)
  }

  updateTask(id: string, updateTaskRequest: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(this.baseApiUrl + '/api/Tasks/' + id, updateTaskRequest)
  }
}

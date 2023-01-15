import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-lists',
  templateUrl: './tasks-lists.component.html',
  styleUrls: ['./tasks-lists.component.css']
})
export class TasksListsComponent implements OnInit {

  tasks: Tasks[] = [];
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks()
      .subscribe({
        next: (tasks) => {
          console.log(tasks);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}

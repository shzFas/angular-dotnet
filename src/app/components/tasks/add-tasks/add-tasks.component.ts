import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  addTaskRequest: Tasks = {
    id: '',
    name: '',
    description: '',
    status: true,
  }
  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {

  }

  addTasks() {
    this.tasksService.addTasks(this.addTaskRequest)
      .subscribe({
        next: (tasks) => {
          this.router.navigate(['tasks']);
        }
      })
  }

}

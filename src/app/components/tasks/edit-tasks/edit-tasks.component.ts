import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  taskDetails: Tasks = {
    id: '',
    name: '',
    description: '',
    status: true,
  };

  constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe({
        next: (params) => {
          const id = params.get('id')
          if (id) {
            this.tasksService.getTask(id)
              .subscribe({
                next: (response) => {
                  this.taskDetails = response
                },
              });
          }
        },
      })
  }

  editTask() {
    
  }

}

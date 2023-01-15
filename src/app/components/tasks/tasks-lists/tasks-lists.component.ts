import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-tasks-lists',
  templateUrl: './tasks-lists.component.html',
  styleUrls: ['./tasks-lists.component.css']
})
export class TasksListsComponent implements OnInit {

  tasks: Tasks[] = [
    {
      id: '1',
      name: 'Задача 1',
      description: 'Отнеси подай принес иотнеси',
      status: true,
    },
    {
      id: '2',
      name: 'Задача 2',
      description: 'Отнесиподай принес иотнеси',
      status: false,
    },
    {
      id: '3',
      name: 'Задача 3',
      description: 'Отнесиподай принес иотнеси',
      status: true,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

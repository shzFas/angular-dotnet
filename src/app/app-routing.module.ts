import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTasksComponent } from './components/tasks/add-tasks/add-tasks.component';
import { TasksListsComponent } from './components/tasks/tasks-lists/tasks-lists.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListsComponent,
  },
  {
    path: 'tasks',
    component: TasksListsComponent,
  },
  {
    path: 'tasks/add',
    component: AddTasksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

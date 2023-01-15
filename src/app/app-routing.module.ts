import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListsComponent } from './components/tasks/tasks-lists/tasks-lists.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListsComponent,
  },
  {
    path: 'tasks',
    component: TasksListsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

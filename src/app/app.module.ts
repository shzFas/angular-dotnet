import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListsComponent } from './components/tasks/tasks-lists/tasks-lists.component';
import { AddTasksComponent } from './components/tasks/add-tasks/add-tasks.component';
import { FormsModule } from '@angular/forms';
import { EditTasksComponent } from './components/tasks/edit-tasks/edit-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListsComponent,
    AddTasksComponent,
    EditTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

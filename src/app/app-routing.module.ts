import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [ { path: '', redirectTo: '/tasks', pathMatch: 'full' },
{ path: 'tasks', component: TaskListComponent },
{ path: 'tasks/:id', component: TaskDetailsComponent },
{ path: 'create-task', component: CreateTaskComponent },
{ path: 'edit-task/:id', component: EditTaskComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

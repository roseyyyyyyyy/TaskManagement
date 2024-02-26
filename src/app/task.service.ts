import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Task } from './task.module';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: Task[] = [];
  id: number=1;

  constructor() { }

  addTask(title: string, description: string, dueDate: string) {
    const task: Task = {
    
      title,
      description, // Include the description property
      dueDate,
      completed: false
    };
    task.id=this.id++;
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  markCompleted(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  }

  deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
   updateTask(updatedTask: Task) {
    // Find the task by ID or any unique identifier and update its properties
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

}

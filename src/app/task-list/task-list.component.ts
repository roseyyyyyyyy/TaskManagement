import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.module';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  implements OnInit{
  tasks: Task[] = [];
  saved:boolean=false;
  editClicked: boolean=false;
  selectedTask: Task = { title: '', description: '', dueDate: '', completed: false }; // Initialize with an empty task
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  // markCompleted(index: number) {
  //   this.taskService.markCompleted(index);
  // }
  markCompleted(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
  updateTask(task: Task){
this.taskService.updateTask(task);
this.selectedTask=task;
this.editClicked=true;
console.log(task);
console.log(this.tasks);
console.log(this.saved);
console.log(this.editClicked);

  }
  onSaved(event: boolean){
this.saved=event;

  }

}

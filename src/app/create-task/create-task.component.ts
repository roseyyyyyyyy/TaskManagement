
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  title: string = '';
   description: string = '';

  dueDate: string = '';

  constructor(private taskService: TaskService) { }

  onSubmit() {
    if (this.title && this.dueDate) {
      this.taskService.addTask(this.title, this.description, this.dueDate);

      this.resetForm();
    } else {
      alert('Please enter title and due date.');
    }
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.dueDate = '';
  }
}
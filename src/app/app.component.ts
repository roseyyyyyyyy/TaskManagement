import { Component } from '@angular/core';
import { Task } from './task.module';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managing-tasks';
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {
    // Assuming you're fetching tasks and populating selectedTask elsewhere in your code
    // Ensure selectedTask is populated with a valid task object
    // Example: this.selectedTask = this.taskService.getTaskById(taskId);
  }
}

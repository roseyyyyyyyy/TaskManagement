import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.module';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() task: Task | null = null; // Ensure task is initialized
   @Output() saveChanges=new EventEmitter<boolean>();
  saved:boolean=false;

  constructor(private taskService: TaskService) { }

  onSubmit() {
    if (this.task !== null) {
      this.taskService.updateTask(this.task);
      this.saved=!this.saved;
      this.saveChanges.emit(this.saved);
    } else {
      console.error('Task is null. Unable to submit.'); // Log an error
      // Handle the null task case - you can display an error message or provide alternative behavior
    }
  }
}

import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add task', () => {
    service.addTask('Task 1', 'Description 1', '2024-02-26');
    expect(service.getTasks().length).toBe(1);
  });

  it('should mark task as completed', () => {
    service.addTask('Task 1', 'Description 1', '2024-02-26');
    service.markCompleted(0);
    expect(service.getTasks()[0].completed).toBe(true);
  });

  it('should delete task', () => {
    service.addTask('Task 1', 'Description 1', '2024-02-26');
    service.deleteTask(0);
    expect(service.getTasks().length).toBe(0);
  });

  it('should update task', () => {
    service.addTask('Task 1', 'Description 1', '2024-02-26');
    let updatedTask = service.getTasks()[0];
    updatedTask.title = 'Updated Task';
    service.updateTask(updatedTask);
    expect(service.getTasks()[0].title).toBe('Updated Task');
  });
});

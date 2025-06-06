import {Component, Output, EventEmitter, inject, Input} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private taskService = inject(TasksService);

  onCancelTask() {
   this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
      },
      this.userId
    );
    this.close.emit();
  }
}

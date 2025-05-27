import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTask} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelTaskCreation = new EventEmitter<void>();
  @Output() createTask = new EventEmitter<NewTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelTask() {
   this.cancelTaskCreation.emit();
  }

  onSubmit() {
    this.createTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}

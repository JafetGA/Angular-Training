import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import { DUMMY_TASK } from "../dummy-task";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTask} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask: boolean = false;
  tasks = DUMMY_TASK;

  get selectedUserTasks() {
    return this.tasks.filter((task) =>
       task.userId === this.userId
    );
  }

  onAddTask(){
    this.isAddingTask = true
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onCancelTaskCreation(){
    this.isAddingTask = false;
  }

  createTask(taskData: NewTask){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.isAddingTask = false;
  }
}

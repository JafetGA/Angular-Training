import {NgModule} from "@angular/core";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}

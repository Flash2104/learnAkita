import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosListComponent } from './list/todos-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TodosListComponent,
        TodoComponent
    ]
})
export class TodosModule {
}

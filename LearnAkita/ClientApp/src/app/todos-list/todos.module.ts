import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosFiltersComponent } from './filter/filter.component';
import { TodosListComponent } from './list/todos-list.component';
import { TodosPageComponent } from './page/todos-page.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [TodosListComponent, TodosFiltersComponent],
    declarations: [
        TodosListComponent,
        TodoComponent,
        TodosPageComponent,
        TodosFiltersComponent
    ]
})
export class TodosModule {
}

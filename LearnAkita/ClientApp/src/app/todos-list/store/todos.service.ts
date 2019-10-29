import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { createTodo, ITodo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private todosStore: TodosStore) { }

    updateFilter(filter: VISIBILITY_FILTER) {
        this.todosStore.update({
            ui: {
                filter
            }
        });
    }


    complete({ id, completed }: ITodo) {
        this.todosStore.update(id, {
            completed
        });
    }


    add(title: string) {
        const todo = createTodo({ title });
        this.todosStore.add(todo);
    }


    delete(id: ID) {
        this.todosStore.remove(id);
    }

}

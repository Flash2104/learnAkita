import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { ITodo } from './todo.model';

export interface TodoState extends EntityState<ITodo> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}

const initialState = {
    ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo' })
export class TodosStore extends EntityStore<TodoState, ITodo> {

    constructor() {
        super(initialState);
    }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { ITodo } from '../store/todo.model';

@Component({
    selector: 'app-todos',
    templateUrl: './todos-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
    @Input() todos: ITodo[];
    @Output() complete = new EventEmitter<ITodo>();
    @Output() delete = new EventEmitter<ID>();

    constructor() {
    }

    ngOnInit(): void {

    }

    trackByFn(index, todo) {
        return todo.id;
      }
}

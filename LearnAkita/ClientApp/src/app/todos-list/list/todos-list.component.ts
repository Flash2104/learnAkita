import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { ITodo } from '../store/todo.model';

@Component({
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
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
}

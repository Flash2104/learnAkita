import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ITodo } from '../store/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() complete = new EventEmitter<ITodo>();
  @Output() delete = new EventEmitter<ID>();

  control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    });
  }

}

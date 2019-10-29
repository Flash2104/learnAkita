import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {

    }
}

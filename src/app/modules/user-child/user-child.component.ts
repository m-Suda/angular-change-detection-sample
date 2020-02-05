import { Component, DoCheck, Input } from '@angular/core';

@Component({
    selector: 'app-user-child',
    templateUrl: './user-child.component.html',
    styleUrls: ['./user-child.component.scss'],
})
export class UserChildComponent implements DoCheck {
    @Input() hello: string;

    constructor() {}

    ngDoCheck(): void {
        console.log('UserChildComponent-DoCheck');
    }
}

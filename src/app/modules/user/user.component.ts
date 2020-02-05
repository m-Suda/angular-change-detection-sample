import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // changeDetection: ChangeDetectionStrategy.Default,
})
export class UserComponent implements OnChanges, DoCheck {
    @Input() userName: string;
    public hello = '';

    constructor() {}

    ngOnChanges(): void {
        this.hello = `Hello ${this.userName}`;
    }

    ngDoCheck(): void {
        console.log('UserComponent-DoCheck');
    }
}

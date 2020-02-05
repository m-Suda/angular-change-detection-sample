import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

export interface Fruits {
    name: string;
}

@Component({
    selector: 'app-fruits-list',
    templateUrl: './fruits-list.component.html',
    styleUrls: ['./fruits-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // changeDetection: ChangeDetectionStrategy.Default,
})
export class FruitsListComponent implements DoCheck {
    @Input() fruitsList: Fruits[];

    constructor() {}

    ngDoCheck(): void {
        console.log('FruitsListComponent-DoCheck');
    }
}

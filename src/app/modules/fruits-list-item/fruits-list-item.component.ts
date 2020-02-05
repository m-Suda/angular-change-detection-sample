import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { Fruits } from '../fruits-list/fruits-list.component';

@Component({
    selector: 'app-fruits-list-item',
    templateUrl: './fruits-list-item.component.html',
    styleUrls: ['./fruits-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // changeDetection: ChangeDetectionStrategy.Default,
})
export class FruitsListItemComponent implements DoCheck {
    @Input() fruits: Fruits;

    constructor() {}

    ngDoCheck(): void {
        console.log('FruitsListItemComponent-DoCheck');
    }
}

import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { Store } from '../store-list/store-list.component';

@Component({
    selector: 'app-store-list-item',
    templateUrl: './store-list-item.component.html',
    styleUrls: ['./store-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // changeDetection: ChangeDetectionStrategy.Default,
})
export class StoreListItemComponent implements DoCheck {
    @Input() store: Store;

    constructor() {}

    ngDoCheck(): void {
        console.log('StoreListItemComponent-DoCheck');
    }
}

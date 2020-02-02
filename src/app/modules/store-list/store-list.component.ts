import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Store {
    name: string;
    isFavorite: boolean;
}

@Component({
    selector: 'app-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // changeDetection: ChangeDetectionStrategy.Default,
})
export class StoreListComponent {
    @Input() storeList: Store[];

    constructor() {}
}

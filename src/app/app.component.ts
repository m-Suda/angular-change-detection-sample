import { Component } from '@angular/core';
import { Store } from './modules/store-list/store-list.component';
import { Fruits } from './modules/fruits-list/fruits-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public storeList: Store[] = [
        { name: '渋谷店', isFavorite: true },
        { name: '新宿店', isFavorite: false },
        { name: '豊洲店', isFavorite: false },
    ];

    public fruitsList: Fruits[] = [
        { name: 'オレンジ' },
        { name: 'ブドウ' },
        { name: 'バナナ' },
        { name: 'メロン' },
    ];

    public title = 'angular-change-detect';

    public changeTitle() {
        this.title = 'Title updated';
    }

    public addStore() {
        // StoreListComponentが`changeDetection: ChangeDetectionStrategy.OnPush`のとき
        // 要素の追加は行われない。何故なら配列(オブジェクト)の参照が変わっていないから。
        this.storeList.push({ name: '飯田橋店', isFavorite: false });
    }

    public addStoreNewArray() {
        // StoreListComponentが`changeDetection: ChangeDetectionStrategy.OnPush`でも
        // 要素の追加が行われる。何故なら配列(オブジェクト)の参照が変わっているから。
        // StoreList, FruitsList両方にChangeDetectionStrategy.OnPushが設定されている場合、
        // StoreListComponent以下のみにChangeDetectionが伝播する。
        // FruitsListComponent以下にChangeDetectionは走らない。
        const currentStoreList = [...this.storeList];
        this.storeList = [...currentStoreList, { name: '飯田橋店', isFavorite: false }];
    }
}

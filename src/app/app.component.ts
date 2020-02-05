import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Store } from './modules/store-list/store-list.component';
import { Fruits } from './modules/fruits-list/fruits-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements DoCheck {
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

    public userName = 'John';

    public title = 'angular-change-detect';

    ngDoCheck(): void {
        console.log('AppComponent-DoCheck');
    }

    /**
     * EventだけでChangeDetectionが走るのかを確認する
     */
    public consoleLog() {
        console.log('AppComponentのconsoleLog()');
        console.log('event');
    }

    /**
     * AppComponentの値だけを変更してChangeDetectionが走るのかを確認する
     */
    public changeTitle() {
        console.log('AppComponentのtitleをchange');
        this.title = 'Title updated';
    }

    /**
     * UserComponentの値を変更する
     */
    public changeUserName() {
        console.log('AppComponentからuserNameをchange');
        this.userName = 'Lucy';
    }

    /**
     * StoreListに要素を追加する
     */
    public addStore() {
        console.log('AppComponentからStoreListに追加');
        this.storeList.push({ name: '飯田橋店', isFavorite: false });
    }

    /**
     * StoreListのコピーを作成、それに要素を追加して新しい配列を格納する
     */
    public addStoreNewArray() {
        console.log('AppComponentから新しいStoreList配列を格納');
        const currentStoreList = [...this.storeList];
        this.storeList = [...currentStoreList, { name: '飯田橋店', isFavorite: false }];
    }
}

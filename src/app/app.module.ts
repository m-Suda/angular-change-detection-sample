import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreListComponent } from './modules/store-list/store-list.component';
import { StoreListItemComponent } from './modules/store-list-item/store-list-item.component';
import { FruitsListComponent } from './modules/fruits-list/fruits-list.component';
import { FruitsListItemComponent } from './modules/fruits-list-item/fruits-list-item.component';

@NgModule({
    declarations: [AppComponent, StoreListComponent, StoreListItemComponent, FruitsListComponent, FruitsListItemComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

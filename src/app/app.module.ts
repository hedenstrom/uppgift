import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ViewSelectorComponent } from './main/view-selector/view-selector.component';
import { ListItemsComponent } from './main/list-items/list-items.component';
import { ListItemComponent } from './main/list-items/list-item/list-item.component';
import { CardItemComponent } from './main/list-items/card-item/card-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelfTextDialogComponent } from './main/list-items/self-text-dialog/self-text-dialog.component';

import { DetailsDialogComponent } from './main/list-items/details-dialog/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ViewSelectorComponent,
    ListItemsComponent,
    ListItemComponent,
    CardItemComponent,
    SelfTextDialogComponent,
    DetailsDialogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

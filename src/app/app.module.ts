import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { SmartTruncatePipe } from './shared/pipes/smart-truncate.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SmartTruncatePipe,
    FilterPipe,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

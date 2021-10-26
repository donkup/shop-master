import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    CartComponent,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

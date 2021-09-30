import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AllOrdersComponent,
    RecentOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './modules/detail/detail.component';
import { OrderComponent } from './modules/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

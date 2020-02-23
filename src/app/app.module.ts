import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './modules/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

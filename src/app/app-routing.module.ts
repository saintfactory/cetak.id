import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { DetailComponent } from './modules/detail/detail.component';
import { OrderComponent } from './modules/order/order.component';

const routes: Routes = [
  {
    path : "",
    component : HomepageComponent
  },
  {
    path : "detail",
    component : DetailComponent
  },
  {
    path : "order/:id",
    component : OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

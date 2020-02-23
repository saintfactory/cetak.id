import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { DetailComponent } from './modules/detail/detail.component';


const routes: Routes = [
  {
    path : "",
    component : HomepageComponent
  },
  {
    path : "detail",
    component : DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

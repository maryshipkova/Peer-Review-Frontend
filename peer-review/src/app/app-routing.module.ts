import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system/system.component';
import {HomePageComponent} from './system/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// <-- debugging purposes only

  exports: [RouterModule]
})
export class AppRoutingModule { }

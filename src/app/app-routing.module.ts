import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CarListComponent} from './car-list/car-list.component';
import {CarFormComponent} from './car-form/car-form.component';
import {CarDetailsComponent} from './car-details/car-details.component';


const appRoutes: Routes = [
  // home
  { path: '', component: HomeComponent},

  // view car list
  { path: 'carlist', component: CarListComponent},

  // view car details
  { path: 'car/:id', component: CarDetailsComponent},

  // create car
  { path: 'create', component: CarFormComponent},

  // update car
  { path: 'update/:id', component: CarFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';



const dashboardRoutes: Routes = [
  // {
  //   path: '',
  //   component: DashboardPage
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'station-details/:id',
    loadChildren: () => import('./station-details/station-details.module').then(m => m.StationDetailsPageModule)
  },
  {
    path: 'station-details',
    loadChildren: () => import('./station-details/station-details.module').then(m => m.StationDetailsPageModule)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(dashboardRoutes),
    ComponentsModule
  ],
  declarations: [ ]
})
export class DashboardPageModule {}

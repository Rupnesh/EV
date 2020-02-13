import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatePage } from './create/create.page';

const routes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatePage],
  entryComponents: [
    CreatePage
  ],
})
export class VehiclesPageModule {}



// import { IonicModule } from '@ionic/angular';
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { ComponentsModule } from '../components/components.module';
// import { environment } from '../../environments/environment';


// import { CreatePage } from './create/create.page';

// const firebaseRoutes: Routes = [
//   {
//     path: 'listing',
//     loadChildren: () => import('./listing/listing.module').then(m => m.ListingPageModule)
//   }
// ];

// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     ComponentsModule,
//     RouterModule.forChild(firebaseRoutes),
//   ],
//   declarations: [CreatePage],
//   entryComponents: [
//     CreatePage
//   ],
// })
// export class VehiclesPageModule {}


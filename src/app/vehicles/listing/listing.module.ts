import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListingPage } from './listing.page';

import { UserService } from '../uservehicle.service';
import { UserProfileResolver } from './user-vehicle.resolver';

import { ComponentsModule } from '../../components/components.module';
import { LanguageService } from '../../language/language.service';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ListingPage,
    resolve: {
      data: UserProfileResolver
    } 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListingPage],
  providers: [UserService, UserProfileResolver]
})
export class ListingPageModule {}

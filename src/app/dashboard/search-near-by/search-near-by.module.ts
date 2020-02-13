import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchNearByPage } from './search-near-by.page';
import { ComponentsModule } from '../../components/components.module';

import { DashBoardService } from '../dashboard.service';
import { SearchNearByResolver } from './search-near-by.resolver';

import { LanguageService } from '../../language/language.service';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: SearchNearByPage,
    resolve: {
      data: SearchNearByResolver
    } 
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchNearByPage],
  providers: [DashBoardService, SearchNearByResolver]
})
export class SearchNearByPageModule {}

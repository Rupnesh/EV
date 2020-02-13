import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' }, 
  { path: 'walkthrough', loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
  { path: 'getting-started', loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedPageModule) },
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'auth/signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'auth/forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'app', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'contact-card', loadChildren: () => import('./contact-card/contact-card.module').then(m => m.ContactCardPageModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'forms-and-validations', loadChildren: () => import('./forms/validations/forms-validations.module').then(m => m.FormsValidationsPageModule) },
  { path: 'forms-filters', loadChildren: () => import('./forms/filters/forms-filters.module').then(m => m.FormsFiltersPageModule) },
  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'firebase', loadChildren: () => import('./firebase/firebase-integration.module').then(m => m.FirebaseIntegrationModule) },
  
  { path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesPageModule) },
  
  
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'station-details', loadChildren: './dashboard/station-details/station-details.module#StationDetailsPageModule' },

  // { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },
  



  { path: 'search-near-by', loadChildren: './dashboard/search-near-by/search-near-by.module#SearchNearByPageModule' },
  { path: 'charge', loadChildren: './dashboard/charge/charge.module#ChargePageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'stationhistory', loadChildren: './stationhistory/stationhistory.module#StationhistoryPageModule' },
  { path: 'bill', loadChildren: './dashboard/bill/bill.module#BillPageModule' },
  { path: 'create', loadChildren: './vehicles/create/create.module#CreatePageModule' },
  { path: 'listing', loadChildren: './vehicles/listing/listing.module#ListingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

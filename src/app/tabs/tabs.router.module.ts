import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'home',
            loadChildren: () => import('../dashboard/home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'station-details/:id',
            loadChildren: () => import('../dashboard/station-details/station-details.module').then(m => m.StationDetailsPageModule)
          },
          {
            path: 'station-details',
            loadChildren: () => import('../dashboard/station-details/station-details.module').then(m => m.StationDetailsPageModule)
          },
          {
            path: 'search-near-by',
            loadChildren: () => import('../dashboard/search-near-by/search-near-by.module').then(m => m.SearchNearByPageModule)
          }
        ]
      },

      {
        path: 'vehicles',
        loadChildren: () => import('../vehicles/vehicles.module').then(m => m.VehiclesPageModule)
      }


    ]
  },
  // /app/ redirect
  {
    path: '',
    // redirectTo: 'app/categories', 
    redirectTo: 'app/dashboard/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  // providers: [ NativeGeocoder]
})
export class TabsPageRoutingModule {}

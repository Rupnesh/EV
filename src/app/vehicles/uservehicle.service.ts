import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserVehicleModel } from './listing/user-vehicle.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class UserService {
  private profileDataStore: DataStore<UserVehicleModel>;

  constructor(private http: HttpClient) { }

  public getProfileDataSource(): Observable<UserVehicleModel> {
    return this.http.get<UserVehicleModel>('./assets/sample-data/user/user-vehicles.json');
  }

  public getProfileStore(dataSource: Observable<UserVehicleModel>): DataStore<UserVehicleModel> {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserVehicleModel = new UserVehicleModel();
      this.profileDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.profileDataStore.load(dataSource);
    }
    return this.profileDataStore;
  }

  
}

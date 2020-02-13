import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../uservehicle.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { UserVehicleModel } from './user-vehicle.model';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    const dataSource: Observable<UserVehicleModel> = this.userService.getProfileDataSource();
    console.log(dataSource)
    const dataStore: DataStore<UserVehicleModel> = this.userService.getProfileStore(dataSource);
    console.log(dataStore)
    return dataStore;
  }
}

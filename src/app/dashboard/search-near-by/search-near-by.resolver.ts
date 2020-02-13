import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DashBoardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { SearchNearByModel } from './search-near-by.model';

@Injectable()
export class SearchNearByResolver implements Resolve<any> {

  constructor(private userService: DashBoardService) { }

  resolve() {
    const dataSource: Observable<SearchNearByModel> = this.userService.getProfileDataSource();
    const dataStore: DataStore<SearchNearByModel> = this.userService.getProfileStore(dataSource);
    return dataStore;
  }
}

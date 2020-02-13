import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SearchNearByModel } from './search-near-by/search-near-by.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class DashBoardService {
  private profileDataStore: DataStore<SearchNearByModel>;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  // params = new HttpParams()
  //   .set('code', 's2w4KXFJWL58Mdn0k0iJamGuATQQ7jqouj4te6KjwNhX5YA6KmbHmg==')

  constructor(private http: HttpClient) { }

  public getProfileDataSource(): Observable<SearchNearByModel> {
    return this.http.get<SearchNearByModel>('./assets/sample-data/stations/stations.json');
  }

  public getProfileStore(dataSource: Observable<SearchNearByModel>): DataStore<SearchNearByModel> {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: SearchNearByModel = new SearchNearByModel();
      this.profileDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.profileDataStore.load(dataSource);
    }
    return this.profileDataStore;
  }


  public getDeviceIdData(data) {
    console.log('service clicked....')


    let body = new HttpParams();
    body = body.set('data', JSON.stringify(data));
    body = body.set('code', 's2w4KXFJWL58Mdn0k0iJamGuATQQ7jqouj4te6KjwNhX5YA6KmbHmg');


    // let body = JSON.stringify({
    //   title: 'new_title',
    //   body: 'new_body',
    //   userId: '1'
    // });

    // return this.http.post('https://jsonplaceholder.typicode.com/posts', body);


    return this.http.post('https://iottriggerfunctionapp.azurewebsites.net/api/CloudToDeviceMessage?code=s2w4KXFJWL58Mdn0k0iJamGuATQQ7jqouj4te6KjwNhX5YA6KmbHmg==', data);

    // return this.http.post('https://iottriggerfunctionapp.azurewebsites.net/api/CloudToDeviceMessage?code=s2w4KXFJWL58Mdn0k0iJamGuATQQ7jqouj4te6KjwNhX5YA6KmbHmg==', JSON.stringify(data));
  }


}

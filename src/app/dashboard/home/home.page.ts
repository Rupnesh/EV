import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  stationID: any = ''
  currentPinCode: any;
  constructor(public storage: StorageService, public router: Router) { }

  async ngOnInit() {
  }

  logoutUser() {
    this.storage.removeItem().then(data => {
      this.router.navigate(['auth/login'])
    });
  }


  serachById() {
    this.router.navigate(['app/dashboard/station-details', this.stationID])
  }

  serachNearBy() {
    this.router.navigate(['app/dashboard/search-near-by'])
  }

}



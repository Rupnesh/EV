import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserVehicleModel } from './user-vehicle.model';

import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./styles/firebase-listing.page.scss',
  './styles/firebase-listing.ios.scss',
  './styles/firebase-listing.shell.scss'],
})
export class ListingPage implements OnInit {

  vehicles: UserVehicleModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.vehicles && this.vehicles.isShell) ? true : false;
  }
  constructor(public modalController: ModalController,private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.data.subscribe((resolvedRouteData) => {
      const profileDataStore = resolvedRouteData['data'];
      console.log(profileDataStore)

      profileDataStore.state.subscribe(
        (state) => {
          this.vehicles = state.vehicles;
          console.log('vehicle...',this.vehicles)

        },
        (error) => {}
      );
    },
    (error) => {});

  }

  async addVehicles() {
    const modal = await this.modalController.create({
      component: CreatePage
    });
    await modal.present();
  }

}

import { Component, ViewChild, OnInit, HostBinding } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

import { SearchNearByModel } from './search-near-by.model';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { Router, NavigationExtras } from '@angular/router'


@Component({
  selector: 'app-search-near-by',
  templateUrl: './search-near-by.page.html',
  styleUrls: [
    './search-near-by.page.scss',
    './styles/firebase-listing.page.scss',
    './styles/firebase-listing.ios.scss',
    './styles/firebase-listing.shell.scss'],
})
export class SearchNearByPage implements OnInit {

  stations: SearchNearByModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.stations && this.stations.isShell) ? true : false;
  }

  @ViewChild(GoogleMapComponent, { static: true }) _GoogleMap: GoogleMapComponent;
  map: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    zoom: 12,
    // disableDefaultUI: true,
    center: { lat: 18.5204, lng: 73.8567 },
    fullscreenControl: false,
    mapTypeControl: false

  };
  loadingElement: any;
  stationList: any = []

  constructor(private loadingController: LoadingController, public router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
    });
    this.createLoader();
    //this.geolocateMe();


    this.route.data.subscribe((resolvedRouteData) => {
      const profileDataStore = resolvedRouteData['data'];

      profileDataStore.state.subscribe(
        (state) => {
          this.stations = state.stations;
          this.stationList = this.stations
          this.stationList.sort((a, b) => { return parseFloat(a.distance) - parseFloat(b.distance) });
        },
        (error) => {}
      );
    },
    (error) => {});



  }


  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
  }

  async presentLoader() {
    await this.loadingElement.present();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }

  async geolocateMe() {

    this.presentLoader();

    var markers = this.stations;

    await Geolocation.getCurrentPosition().then(position => {

      const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.panTo(current_location);

      // add a marker
      let marker = new google.maps.Marker({
        position: current_location,
        title: 'You are here!',
      });

      // To add the marker to the map, call setMap();
      marker.setMap(this.map);

      this.setMultipleMarker(markers, this);
    }).catch((error) => {
      console.log('Error getting current location', error);

    }).finally(() => this.dismissLoader());
  }

  setMultipleMarker(markers, self) {

    let marker;
    let infowindow = new google.maps.InfoWindow();

    for (let i = 0; i < markers.length; i++) {
      marker = new google.maps.Marker(
        {
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          map: self.map
        }
      );

      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(markers[i].toolTip);
          infowindow.open(self.map, marker)
        }
      })(marker, i))
    }

    // markers.forEach(function (marker) {
    //   (function (marker) {
    //     let mark = new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng) });
    //     //let infowindow = new google.maps.InfoWindow({ content: marker.toolTip });
    //     //infowindow.open(self.map, mark);
    //     mark.setMap(self.map);
    //   })(marker)
    // })


  }

  showDeatils(item) {
    this.router.navigate(['app/dashboard/station-details'], { queryParams: { profile: JSON.stringify(item) } })
  }

}




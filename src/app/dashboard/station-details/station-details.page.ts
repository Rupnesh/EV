import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
// import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.page.html',
  styleUrls: ['./station-details.page.scss'],
})
export class StationDetailsPage implements OnInit {
  stationId: any;
  userLocationFromLatLng: any;
  connetorSelected: any = "C1";
  // selectPricing:any = "₹";
  selectPricing:any = "price";
  currentPinCode: any;

  pricingPrice:any;
  pricingUnits:any;
  pricingTime:any;

  stationDetails: any = {
    stationID: "111",
    stationName: "Sahyadri Farms",
    agentName: "XYZ",
    avatar: '../../../assets/logo.png',
    contact: "+919876563454",
    address: "Ztric India Pvt.Ltd, Sahyadri Farms, Baner Pune",
    lat: 18.562656,
    lng: 73.779686,
    toolTip: 'Sahyadri Farms Baner',
    distance: '0.0 km',
    timing: "07 AM to 11 PM",
    isPublic: "No",
    pricingType: ["price","units","time"],
    pricing: [
      { "units": "10kWh", "price": "20", "time": "10 minutes" },
      { "units": "20kWh", "price": "40", "time": "20 minutes" },
      { "units": "30kWh", "price": "60", "time": "30 minutes" },
      { "units": "40kWh", "price": "80", "time": "40 minutes" },
      { "units": "50kWh", "price": "100", "time": "50 minutes" },
    ],
    status: 1,
    connectorType: ["C1", "C2", "C3", "C4"]
  }

  constructor(private activatedRoute: ActivatedRoute, public router: Router
    // private nativeGeocoder: NativeGeocoder
    ) { }

  ngOnInit() {
    this.stationId = this.activatedRoute.snapshot.params.id;

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.stationDetails = JSON.parse(params['profile']);
      }
    )

    this.pricingPrice = this.stationDetails.pricing[0].price;
    this.pricingUnits = this.stationDetails.pricing[0].units;
    this.pricingTime = this.stationDetails.pricing[0].time;
  }

  radioGroupChange(type) {
    this.connetorSelected = type;
  }

  radioPriceChange(type) {
    this.selectPricing = type;
  }

  proceed() {
    this.router.navigate(['app/dashboard/charge'] , { queryParams: { profile: JSON.stringify(this.stationDetails) } } )
    // this.router.navigate(['app/dashboard/charge'], { queryParams: { profile: JSON.stringify(item) } })
  }

  // async getCurrentPosition() {
  //   const position = await Geolocation.getCurrentPosition();
  //   let lat = position.coords.latitude;
  //   let long = position.coords.longitude;

  //   let geocoder = new google.maps.Geocoder;
  //   let latlng = {lat: lat, lng: long};
  //   geocoder.geocode({'location': latlng}, (results, status) => {
  //      this.currentPinCode = results[0].address_components[8].long_name;
  //   });

  // }

  // watchPosition() {
  //   const wait = Geolocation.watchPosition({}, (position, err) => {
  //   })
  // }

}

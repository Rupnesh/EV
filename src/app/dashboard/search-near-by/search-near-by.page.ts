import { Component, ViewChild, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

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



  constructor(private loadingController: LoadingController, public router: Router) { }

  ngOnInit() {
    this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
    });
    this.createLoader();
    //this.geolocateMe();

    setTimeout(() => {
      this.stationList = [
        {
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
          isPublic: "Yes",
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
        },
        {
          stationID: "112",
          stationName: "PCMC Smart Park",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Proposed PCMC Smart Park, Baner Pune",
    
          lat: 18.566133, 
          lng: 73.790504, 
          toolTip: 'Proposed PCMC Smart Park',
          distance: '1.2 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
          pricingType: ["price","units","time"],
          pricing: [
            { "units": "10kWh", "price": "20", "time": "10 minutes" },
            { "units": "20kWh", "price": "40", "time": "20 minutes" },
            { "units": "30kWh", "price": "60", "time": "30 minutes" },
            { "units": "40kWh", "price": "80", "time": "40 minutes" },
            { "units": "50kWh", "price": "100", "time": "50 minutes" },
          ],
          status: 0,
          connectorType: ["C1", "C2", "C3", "C4"]
        },
        {
          stationID: "113",
          stationName: "Pentaloons",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Pentaloons Achalare Retailors, Baner Pune",
    
          lat: 18.557468, 
          lng: 73.792747, 
          toolTip: 'Pentaloons Achalare Retailors',
          distance: '1.5 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "114",
          stationName: "Someshwar",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Someshwar Temple, Pashan Pune",
    
          lat: 18.548498, 
          lng: 73.791344, 
          toolTip: 'RS Lab Someshwar Temple Rd',
          distance: '2.0 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "115",
          stationName: "Auditorium",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "'Dr.APJ KALAM AUDI, Pashan Pune",
    
          lat: 18.529396, 
          lng: 73.792175, 
          toolTip: 'Dr.APJ KALAM AUDI Pashan',
          distance: '4.0 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "116",
          stationName: "Motiram Nagar",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Motiram Nagar, Warje Pune",
    
          lat: 18.486481, 
          lng: 73.798172, 
          toolTip: 'Motiram Nagar Warje',
          distance: '8.7 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "117",
          stationName: "Siddharth Hospital",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Siddharth Hospital, Warje Pune",
    
          lat: 18.482735, 
          lng: 73.796379, 
          toolTip: 'Siddharth Hospital Warje',
          distance: '9.1 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "118",
          stationName: "Vyom Labs",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Vyom Labs, Baner Pune",
    
          lat: 18.571341, 
          lng: 73.771446, 
          toolTip: 'Vyom Labs Baner',
          distance: '1.3 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "119",
          stationName: "Tower C",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Tower C, Baner Pune",
    
          lat: 18.568766, 
          lng: 73.774170, 
          toolTip: 'Siemens Tower C Baner',
          distance: '0.9 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
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
        },
        {
          stationID: "120",
          stationName: "Hotel Shivar",
          agentName: "XYZ",
          avatar: '../../../assets/logo.png',
          contact: "+919876563454",
          address: "Hotel Shivar, Baner Pune",
    
          lat: 18.568890, 
          lng: 73.781616, 
          toolTip: 'Hotel Shivar Baner',
          distance: '0.7 km',
    
          timing: "07 AM to 11 PM",
          isPublic: "Yes",
          pricingType: ["price","units","time"],
          pricing: [
            { "units": "10kWh", "price": "20", "time": "10 minutes" },
            { "units": "20kWh", "price": "40", "time": "20 minutes" },
            { "units": "30kWh", "price": "60", "time": "30 minutes" },
            { "units": "40kWh", "price": "80", "time": "40 minutes" },
            { "units": "50kWh", "price": "100", "time": "50 minutes" },
          ],
          status: 0,
          connectorType: ["C1", "C2", "C3", "C4"]
        },
    
      ]

      this.stationList.sort((a, b)=>{return parseFloat(a.distance) - parseFloat(b.distance)});
      
    }, 2000);

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

    var markers = this.stationList;

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

    for(let i=0; i< markers.length; i++) {
      marker = new google.maps.Marker(
        { position: new google.maps.LatLng(markers[i].lat, markers[i].lng) ,
          map: self.map
        }
      );

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
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




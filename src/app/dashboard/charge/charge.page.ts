import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LoadingController } from '@ionic/angular';
import { LoaderService } from '../../services/loading.service'
@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage implements OnInit {
  stationDetails: any = [];
  charge: boolean = false;
  loadingElement: any;
  loaderMsg:string = ""
  constructor(public activatedRoute: ActivatedRoute, public router: Router, private callNumber: CallNumber, 
    private loadingController: LoadingController, private loaderService: LoaderService) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.stationDetails = JSON.parse(params['profile']);
      }
    )
  }

  callStation(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  startCharging() {
    this.loaderMsg = "Connecting to Station..."
    this.loaderService.showLoader(this.loaderMsg);
    setTimeout(() => {
      this.charge = !this.charge;
      this.loaderService.hideLoader()
    }, 2000);
  }
  stopCharging() {
    this.loaderMsg = "Stopping Seesion & Calculating Bill"
    this.loaderService.showLoader(this.loaderMsg);
    setTimeout(() => {
      this.charge = !this.charge;
      this.loaderService.hideLoader();
      this.router.navigate(['app/dashboard/bill'])
    }, 2000);
  }

}

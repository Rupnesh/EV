import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service'
import { Router } from '@angular/router'
// import {
//   BarcodeScannerOptions,
//   BarcodeScanner
// } from "@ionic-native/barcode-scanner/ngx";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

import { DashBoardService} from '../dashboard.service'

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  stationID: any = ''
  currentPinCode: any;

  encodeData: any;
  scannedData: {};
  scanSub: any;
  isOn = false;
  // barcodeScannerOptions: BarcodeScannerOptions;

  constructor(public storage: StorageService, public router: Router,
    // private barcodeScanner: BarcodeScanner,
    private qrScanner: QRScanner,
    public platform: Platform,
    private dashboardService: DashBoardService,
    private http: HttpClient
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.scanSub.unsubscribe();
      this.qrScanner.destroy();
      this.isOn = false;
    })
  }

  async ngOnInit() {


  }

  scanCode() {
    console.log('hiii')
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        console.log("status..", status)
        if (status.authorized) {
          this.isOn = true;
          this.qrScanner.show();
          document.getElementsByTagName("body")[0].style.opacity = "0";

          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert(text)
            document.getElementsByTagName("body")[0].style.opacity = "1";
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
            this.qrScanner.destroy();
          }, (err) => {
            alert(JSON.stringify(err));
          });

        } else if (status.denied) {
        } else {
        }
      })
      .catch((e: any) => console.log('Error is', e));

    // this.barcodeScanner
    //   .scan()
    //   .then(barcodeData => {
    //     alert("Barcode data " + JSON.stringify(barcodeData));
    //     this.scannedData = barcodeData;
    //   })
    //   .catch(err => {
    //     console.log("Error", err);
    //   });
  }

  logoutUser() {
    this.storage.removeItem().then(data => {
      this.router.navigate(['auth/login'])
    });
  }


  serachById() {
    console.log('calledd...')

    let body = JSON.stringify({
      title: 'new_title',
      body: 'new_body',
      userId: '1'
    });

    let data = {
      "messageId": "RequestStartTransactionRequest",
    "deviceId": "AR-Test1",
    "extra": "test"
  }
    this.dashboardService.getDeviceIdData(data).subscribe(data=>console.log(data))
    // this.router.navigate(['app/dashboard/station-details', this.stationID])
  }

  serachNearBy() {
    this.router.navigate(['app/dashboard/search-near-by'])
  }

  closeScanner() {
    
  }

}



import { Component } from '@angular/core';
// import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { SplashScreen, Device } = Plugins;
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Router } from '@angular/router'
import { StorageService } from './services/storage.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  appPages = [

    // {
    //   title: 'Vehicles',
    //   url: '/app/vehicles',
    //   icon: './assets/sample-icons/side-menu/categories.svg'
    // },
    {
      title: 'History',
      url: '/app/history',
      icon: './assets/sample-icons/side-menu/categories.svg'
    },
    {
      title: 'Station Visited',
      url: '/app/stationhistory',
      icon: './assets/sample-icons/side-menu/categories.svg'
    },
    {
      title: 'Profile',
      url: '/app/user',
      icon: './assets/sample-icons/side-menu/profile.svg'
    },
    {
      title: 'Contact Card',
      url: '/contact-card',
      icon: './assets/sample-icons/side-menu/contact-card.svg'
    },
    {
      title: 'Notifications',
      url: '/app/notifications',
      icon: './assets/sample-icons/side-menu/notifications.svg'
    }
  ];


  textDir = 'ltr';

  userData: any = [];
  info:any = [];

  constructor(public translate: TranslateService, private router: Router, public storage: StorageService) {
    this.initializeApp();
    this.setLanguage();
  }

  async initializeApp() {
    try {
      await SplashScreen.hide();

      this.info = await Device.getInfo();
      // console.log(this.info)

      var tutorialStatus = await this.storage.getItem("TUTORIAL_COMPLETED");
      var loginStatus = await this.storage.getItem("LOGIN_STATUS");

      // if (tutorialStatus) {
      //   this.router.navigate(['auth/login'])
      // }

      this.userData = await this.storage.getObject("USER_FB_DATA")
      // if(await this.storage.getObject("USER_FB_DATA")) {
      //   this.userData = await this.storage.getObject("USER_FB_DATA")
      //   console.log("fbbb...",this.userData)
      // }

      // await this.storage.getObject("USER_FB_DATA").then((result) => {
      //   this.userData = result
      //   console.log("fbbb than...",this.userData)
      // });

      if (tutorialStatus && loginStatus) {
        this.router.navigate(['app/dashboard/home']);
        // this.router.navigate(['app/categories']);
      }
      if (tutorialStatus && !loginStatus)
        this.router.navigate(['auth/login']);

      if (!tutorialStatus && !loginStatus) {
        this.router.navigate(['walkthrough']);
      }
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }

  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
    // });
  }

}

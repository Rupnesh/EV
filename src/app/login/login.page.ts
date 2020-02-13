import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../services/storage.service'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  users:any = [];

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    public storage: StorageService,
    private fb: Facebook
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  async ngOnInit() {
    this.menu.enable(false);
    // var data = await this.storage.getItem('TUTORIAL_COMPLETED')
    // console.log('logindata1...',data);

    var testValue = await this.storage.getItem("TUTORIAL_COMPLETED");
    console.log('test..',testValue);
  }

  async componentDidLoad() {
    
  }

  doLogin(): void {
    console.log('do Log In');
    this.storage.setItem('LOGIN_STATUS','true')
    this.router.navigate(['app/dashboard']); 
  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.storage.setItem('LOGIN_STATUS','true')
    // this.router.navigate(['app/categories']);

    // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    // this.facebook.api('me?fields=id,name,email,first_name,last_name,picture.width(120).height(120).as(picture_large),gender,birthday', ["user_birthday"]).then(profile => {
     

    // this.fb.login(['public_profile', 'user_friends', 'email'])
    this.fb.login(['public_profile', 'email'])
    .then(res => {
      if (res.status === 'connected') {
        this.getUserDetail(res.authResponse.userID);
        this.router.navigate(['app/dashboard/home']);
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));

    // this.router.navigate(['app/dashboard/home']);
  }

  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['app/categories']);
  }

  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['app/categories']);
  }

  getUserDetail(userid: any) {
    console.log("userid...",userid)
    // this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
    this.fb.api('/' + userid + '/?fields=id,name,email,first_name,last_name,picture.width(120).height(120).as(picture_large),gender,birthday', ["user_birthday"])
      .then(profile => {
        var data = {email: profile['email'], first_name: profile['first_name'],last_name: profile['last_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], birthday: profile['birthday'],gender: profile['gender']}
        this.storage.setObject("USER_FB_DATA",data)
        this.users = profile;
      })
      .catch(e => {
        console.log(e);
      });
  }
}

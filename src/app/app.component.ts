import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Profile',
      url: '/',
      icon: 'profile'
    },
    {
      title: 'Search',
      url: '/',
      icon: 'search'
    },
    {
      title: 'Matching Flights',
      url: '/',
      icon: 'matching'
    },
    {
      title: 'Messages',
      url: '/messages',
      icon: 'messages'
    },
    {
      title: 'Orders',
      url: '/',
      icon: 'orders'
    },
    {
      title: 'Payments',
      url: '/',
      icon: 'payments'
    },
    {
      title: 'Use as a pilot',
      url: '/',
      icon: 'pilot'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'logout'
    },
  ];

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}

  goTo(url: string) {
    this.router.navigate([`/${url}`]).then();
  }
}

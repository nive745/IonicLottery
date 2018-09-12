import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { RestApiProvider } from '../providers/rest-api/rest-api';


import { SavebundleinventoryPage } from './../pages/savebundleinventory/savebundleinventory';

import { HomePage } from '../pages/home/home';
import { MenuPage } from './../pages/menu/menu';
import { AuthenticatePage } from '../pages/authenticate/authenticate';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Application module.
 */
@NgModule({
    declarations: [
        MyApp,
        AuthenticatePage,
        HomePage,
        MenuPage,
        SavebundleinventoryPage,
        
      
    ],
    imports: [
        BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
        HttpModule,
        NgxQRCodeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AuthenticatePage,
        HomePage,
    MenuPage,
    SavebundleinventoryPage
       
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthenticateProvider,
        RestApiProvider,
        BarcodeScanner
    ]
})
export class AppModule {}

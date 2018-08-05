import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { HomePage } from '../pages/home/home';
import { AuthenticatePage } from '../pages/authenticate/authenticate';

/**
 * Application module.
 */
@NgModule({
    declarations: [
        MyApp,
        AuthenticatePage,
        HomePage
      
    ],
    imports: [
        BrowserModule,HttpClientModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AuthenticatePage,
        HomePage
       
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthenticateProvider,
    RestApiProvider
    ]
})
export class AppModule {}

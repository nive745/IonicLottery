import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { RequireAuthenticationPage } from '../authenticate/require-authentication';

import { SavebundleinventoryPage } from '../../pages/savebundleinventory/savebundleinventory';

import { RestApiProvider } from '../../providers/rest-api/rest-api';


/**
 * Home page extending require authentication page.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends RequireAuthenticationPage {
    /**
     * Constructor.
     * 
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    employees: string[];
    errorMessage: string;
    descending: boolean = false;
    order: number;
    column: string = 'name';

    constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public authenticateProvider: AuthenticateProvider, public rest: RestApiProvider) {
        super(navCtrl, navParams, authenticateProvider);
    }

    ionViewDidLoad() {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 1000,
            dismissOnPageChange: true
          }).present();
        this.getEmployees();
        //this.navCtrl.setRoot(SavebundleinventoryPage);
        
    }

    

    logout() {
    this.authenticateProvider.clearAuthenticatedUser()
        this.navCtrl.setRoot('LoginPage');
    }

    getEmployees() {
        
        this.rest.getEmployees()
            .subscribe(
                employees => this.employees = employees,
                error => this.errorMessage = < any > error);
    }


    GotoScanPage(EmployeeId) {
    localStorage.setItem('EmployeeId', EmployeeId);
        this.navCtrl.push('ScanPage');
    }


}
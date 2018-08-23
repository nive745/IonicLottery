import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
/**
 * Generated class for the CompleteinventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({  
  selector: 'page-completeinventory',
  templateUrl: 'completeinventory.html',
})
export class CompleteinventoryPage {
    completeinventory: string[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad CompleteinventoryPage');

        this.getCompleteInventory();
    }
    
    errorMessage() {

    }
    getCompleteInventory() {
        this.rest.getCompleteInventory()
            .subscribe(
                completeinventory => this.completeinventory = completeinventory,
                error => this.errorMessage = < any > error);
    }


}

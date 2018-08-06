import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScanInventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scaninventory',
  templateUrl: 'scaninventory.html',
})
export class ScanInventoryPage {
    scancomplete = {
        "GameName": "1 Crore Jackpot",
        "PacketId": "PKT1234t",
        "Cost": "12",
        "Quantity": "100"
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScanInventoryPage');
    }

    GotoCompleteInventory() {
        this.navCtrl.push('CompleteinventoryPage');
    }
}

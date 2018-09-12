import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  //@ViewChild(Nav) nav: Nav;

  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  GotoScanInventoryPage() {
    this.navCtrl.push('ScanInventoryPage');
  }

  GotoAddBunndlePage() {
    this.navCtrl.push('AddbundlePage');
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      alert(this.scannedCode);
      this.navCtrl.push('ScanInventoryPage');
    }, (err) => {
      console.log('Error: ', err);
    });
  }
}

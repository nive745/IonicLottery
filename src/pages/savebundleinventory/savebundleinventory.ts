import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
import * as $ from 'jquery';


/**
 * Generated class for the SavebundleinventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-savebundleinventory',
  templateUrl: 'savebundleinventory.html',
})
export class SavebundleinventoryPage {
  current: any[];
  completeinventory: string[];
  changevalue : boolean = false;
  currentvalue = 0;
  lastvalue = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider, private alertCtrl: AlertController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SavebundleinventoryPage');

        this.getCompleteInventory();
       console.log(this.completeinventory)
        this.currentvalue = 0;
        this.current = this.completeinventory;
    }
    
    errorMessage() {

    }

    getCompleteInventory() {
        this.rest.getCompleteInventory()
            .subscribe(
                completeinventory => this.SetDataInventory(completeinventory),
                error => this.errorMessage = < any > error);
    }

    SetDataInventory(data):void{
      this.completeinventory = data;
      this.lastvalue = this.completeinventory.length;
      this.current = this.completeinventory;
      
      
    }

    next(): void {
      this.lastvalue = this.completeinventory.length - 1;
      this.currentvalue = this.currentvalue + 1;
    }
    previous(): void {
      this.lastvalue = this.completeinventory.length - 1;
      this.currentvalue = this.currentvalue - 1;
    }

    onSearchChange(newValue) : void {
      let changeindex = parseInt(newValue.target.getAttribute('data-index'));
      this.changevalue = true;
      this.completeinventory[changeindex]["CurrentValue"] = parseInt(newValue.target.value);
      this.completeinventory[changeindex]["TotalValue"] = (parseInt(newValue.target.value) - this.completeinventory[changeindex]["LSQuantity"]) * this.completeinventory[changeindex]["Cost"];
      console.log(changeindex);
    }
  
    gettotal(): void {
      let arr = document.getElementsByClassName("new");
      var tot=0;
      for(var i=0;i<arr.length;i++){
          if ( parseInt(arr[i]['value'] ) ) {
              tot += parseInt(arr[i]['value']);
          }
      }
      this.completeinventory['total'] = tot;
      if(this.changevalue){
        localStorage.setItem("confirminventory",JSON.stringify(this.completeinventory))
        this.navCtrl.setRoot('ConfirmsavebundlePage');
        console.log(tot);
      }else{
        let alert = this.alertCtrl.create({
          subTitle: "You have not change any value.",
          buttons: ['Dismiss']
      });
      alert.present();
      }
      
    }

}

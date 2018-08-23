import {
    Component
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    AlertController
} from 'ionic-angular';

/**
 * Generated class for the AddbundlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-addbundle',
    templateUrl: 'addbundle.html',
})
export class AddbundlePage {
    private bundle: any = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddbundlePage');
    }

    SelectQuantity(Quantity) {
        this.bundle.Quantity = Quantity;
        localStorage.setItem('Quantity', Quantity);
    }
    
    GotoScanInventoryPage() {

    }

    addbundle() {
        let error = '';
        if(this.bundle.GameName == null){
          error= "Please enter gamename.";  
        }else if(this.bundle.PacketId == null){
          error= "Please enter packetid.";
        }else if(this.bundle.Quantity == null){
         error= "Please select quantity."
        }else if(this.bundle.Cost == null){
          error= "Please select cost."
        }else{
           localStorage.setItem('GameName', this.bundle.GameName);
            localStorage.setItem('PacketId', this.bundle.PacketId);
            this.navCtrl.push('ScanInventoryPage');
        } 
        if(error != ''){
          let alert = this.alertCtrl.create({
                        subTitle: error,
                        buttons: ['Dismiss']
                    });
                    alert.present();
        }
           

        
    }

    SelectCost(Cost) {
        this.bundle.Cost = Cost;
        localStorage.setItem('Cost', Cost);
    }

}
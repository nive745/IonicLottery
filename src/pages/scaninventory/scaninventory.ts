import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,    AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
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
        "GameName": localStorage.getItem("GameName"),
        "PacketId": localStorage.getItem("PacketId"),
        "Cost": localStorage.getItem("Cost"),
        "Quantity": localStorage.getItem("Quantity"),

    }

    constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public authenticateProvider: AuthenticateProvider) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScanInventoryPage');
    }
GotoCompleteInventory1() {
     this.navCtrl.push('CompleteinventoryPage');
     }
    GotoCompleteInventory() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

       
        let user = this.authenticateProvider.getAuthenticatedUser();
        this.scancomplete['EmployeeId'] = localStorage.getItem('EmployeeId')
         let body = this.scancomplete;
        console.log(user)
        
         let headers1 = new Headers();
        headers1.append("Content-Type", "application/json");
        headers1.append('x-access-token', user.token);
        
     
        const requestOptions = new RequestOptions({ headers: headers1 });

        this.http.post('http://testing.jmsofttech.com/api/bundle/add', body, requestOptions)
            .map(res => res.json())
            .subscribe(data => {
                if (data.IsSuccess == false) {
                    let alert = this.alertCtrl.create({
                        title: 'Login failed',
                        subTitle: data.Message,
                        buttons: ['Dismiss']
                    });
                    alert.present();
                    
                }else{
                    
                    this.navCtrl.push('CompleteinventoryPage');
                }
                
            }, (err) => {
                let alert = this.alertCtrl.create({
                    title: 'Add bundle failed',
                    subTitle: 'An error accrued.',
                    buttons: ['Dismiss']
                });
                alert.present();
                console.log(err.message);

            });
    }
}

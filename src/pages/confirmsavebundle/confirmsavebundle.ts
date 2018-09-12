import { Component } from '@angular/core';
import { IonicPage,  NavController, NavParams,    AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

/**
 * Generated class for the ConfirmsavebundlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmsavebundle',
  templateUrl: 'confirmsavebundle.html',
})
export class ConfirmsavebundlePage {
  completeinventory: string[];
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public authenticateProvider: AuthenticateProvider) {
  }

  ionViewDidLoad() {
    this.completeinventory = JSON.parse(localStorage.getItem("confirminventory"));
    //console.log(localStorage.getItem("confirminventory"))
    console.log('ionViewDidLoad ConfirmsavebundlePage');
  }

  savebundles(){
    let result = []
    this.completeinventory.forEach(contact => {
     
      if(contact['CurrentValue']){
        result.push(
          {
            "Id":contact['Id'],
            "LSQuantity":contact['LSQuantity'],
            "CurrentQuantity":contact['CurrentValue']
          }
        )
      }
      
    });
    var bundleobj = {
     // "EmployeeId" : parseInt(localStorage.getItem("app.userInfo.id")),
     "EmployeeId" : 1,
     "InventoryData" : result
    }
    let headers = new Headers();
        headers.append("Content-Type", "application/json");

       
        let user = this.authenticateProvider.getAuthenticatedUser();
         let body =bundleobj;
        console.log(user)
        
         let headers1 = new Headers();
        headers1.append("Content-Type", "application/json");
        headers1.append('x-access-token', user.token);
        
     
        const requestOptions = new RequestOptions({ headers: headers1 });

        this.http.post('http://testing.jmsofttech.com/api/Bundle/SaveBundleInventroy', body, requestOptions)
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
                    
                    this.navCtrl.push('AddbundlePage');
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
    console.log(result)
    alert("Test")
  }

}

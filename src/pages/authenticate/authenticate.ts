import { Component} from '@angular/core';
import { LoadingController, NavController, NavParams, AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthenticateProvider} from '../../providers/authenticate/authenticate';
import { HomePage } from '../home/home';
import 'rxjs/Rx';
/**
 * Authenticate page.
 */
@Component({
    selector: 'page-authenticate',
    templateUrl: 'authenticate.html',
})
export class AuthenticatePage {
    private user: any = {};
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public authenticateProvider: AuthenticateProvider, public http: Http, private alertCtrl: AlertController) {

    }

    /**
     * Call authenticator.
     */
    public login(): void {
        let headers1 = new Headers();
        headers1.append("Content-Type", "application/json");
     
        const requestOptions = new RequestOptions({ headers: headers1 });


        let body = {
            username: this.user.username,
            password: this.user.password
        };
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
          }).present();
        this.http.post('http://testing.jmsofttech.com/api/login', body, requestOptions)
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
                    if (this.user.username && this.user.password) {
                        this.authenticateProvider.authenticateUsingCredentials(this.user.username, this.user.password, data.token)
                            .subscribe(() => {
                                this.navCtrl.setRoot(HomePage);
                            });
                    }
                }
                
            }, (err) => {
                let alert = this.alertCtrl.create({
                    title: 'Login failed',
                    subTitle: 'An error accrued.',
                    buttons: ['Dismiss']
                });
                alert.present();
                console.log(err.message);

            });

    }
}
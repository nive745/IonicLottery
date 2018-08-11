import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public itemSelected: number =1;

  public menu = [
    {
      id: 1,
      name: 'Item test 1'
    },
    {
      id: 2,
      name: 'Item test 2'
    },
    {
      id: 3,
      name: 'Item test 3'
    },
    {
      id: 4,
      name: 'Item test 4'
    },
    {
      id: 5,
      name: 'Item test 5'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

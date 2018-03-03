import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  googleUser = {
    name: '',
    userPhoto: '',
    email: '',
    loggedin: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
   /*  this.googleUser.name = this.navParams.get('name');
    this.googleUser.userPhoto = this.navParams.get('userPhoto');
    this.googleUser.email = this.navParams.get('email');
    this.googleUser.loggedin = this.navParams.get('loggedin'); */
    this.storage.get('name').then((val) => {
      this.googleUser.name = val;
    });
    this.storage.get('userPhoto').then((val) => {
      this.googleUser.userPhoto = val;
    });
    this.storage.get('email').then((val) => {
      this.googleUser.email = val;
    });
    this.storage.get('loggedin').then((val) => {
      this.googleUser.loggedin = val;
    });
  }

  ionViewDidLoad() {
    
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.googleUser.name = this.navParams.get('name');
    this.googleUser.userPhoto = this.navParams.get('userPhoto');
    this.googleUser.email = this.navParams.get('email');
    this.googleUser.loggedin = this.navParams.get('loggedin');
  }

  ionViewDidLoad() {
    console.log(this.googleUser.name + " " + this.googleUser.email);
  }

}

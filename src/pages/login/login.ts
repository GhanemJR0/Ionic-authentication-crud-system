import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string = "";
  password:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth) {
  }

  myLogIn() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.email,
      this.password).then(user=>{
        this.navCtrl.push(HomePage);
      }).catch(function (error){
        console.log(error);
      });
  }

}

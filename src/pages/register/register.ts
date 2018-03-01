import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string = "";
  password:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth) {
  }

  myRegister() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email,
    this.password).then(user=>{
      console.log(this.email + " " + this.password);
    }).catch(function (error){
      console.log(error);
    });
  }

}

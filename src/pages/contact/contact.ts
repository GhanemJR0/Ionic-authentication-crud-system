import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public fireAuth: AngularFireAuth) {
  }

  logIn() {
    this.navCtrl.push(LoginPage);
  }

  logOut() {
    this.fireAuth.auth.signOut();
    this.navCtrl.push(HomePage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  logInFacebook() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {console.log(res);
    });
  }

  logInGoogle() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {console.log(res);
    });
  }

}

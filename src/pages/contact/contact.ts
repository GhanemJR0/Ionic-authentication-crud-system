import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserProfilePage } from '../user-profile/user-profile';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  googleUser = {
    name: '',
    userPhoto: '',
    email: '',
    loggedin: false
  }

  constructor(public navCtrl: NavController, public fireAuth: AngularFireAuth, private storage: Storage) {
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

/*   logInFacebook() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {console.log(res);
    });
  } */

  logInGoogle() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.navCtrl.push(HomePage);
      console.log(res);

      this.googleUser.name = res.user.displayName;
      this.googleUser.userPhoto = res.user.photoURL;
      this.googleUser.email = res.user.email;
      this.googleUser.loggedin = true;

      this.storage.set('name', res.user.displayName);
      this.storage.set('userPhoto', res.user.photoURL);
      this.storage.set('email', res.user.email);
      this.storage.set('loggedin', true);

      /* this.navCtrl.push(UserProfilePage, {
        name: this.googleUser.name,
        userPhoto: this.googleUser.userPhoto,
        email: this.googleUser.email,
        loggedin: this.googleUser.loggedin
      }); */

    });
  }

}

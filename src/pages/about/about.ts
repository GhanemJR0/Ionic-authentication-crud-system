import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  peopleList: AngularFireList<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, public fireAuth: AngularFireAuth) {
    this.peopleList = db.list('/people');

    // Page Guard
    fireAuth.auth.onAuthStateChanged(function(user){
      if(!user){
        navCtrl.setRoot(LoginPage)
      }
    });
  }

  createPerson(name, lname, age, dept){
    this.peopleList.push({
      name: name,
      lname: lname,
      age: age,
      dept: dept
    }).then(newPerson =>{ 
      this.navCtrl.push(HomePage);
    }, error=>{console.log(error);});
  }

}

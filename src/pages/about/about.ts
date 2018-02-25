import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { HomePage } from '../home/home';

// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  peopleList: AngularFireList<any>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.peopleList = db.list('/people');
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

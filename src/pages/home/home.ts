import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

import { EditPersonPage } from '../edit-person/edit-person';
import { LoginPage } from '../login/login';
import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personRef: AngularFireList<any>;
  persons: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public fireAuth: AngularFireAuth) {
    //this.persons = db.list('/people').valueChanges();
    this.personRef = db.list('/people');
    this.persons = this.personRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    fireAuth.auth.onAuthStateChanged(function(user){
      if(!user){
        navCtrl.setRoot(LoginPage)
      }
    });
  }
  
  editPerson(id, name, lname, age, dept) {
    //console.log(id,name,lname,age,dept);
    this.navCtrl.push(EditPersonPage, {
      key: id,
      name: name,
      lname: lname,
      age: age,
      dept: dept
    });
  }

  deletePerson(id) {
    this.personRef.remove(id);
  }

  goToProfile() {
    this.navCtrl.push(UserProfilePage);
  }

}

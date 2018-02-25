import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EditPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {

  personsRef: AngularFireList<any>;
  persons: Observable<any[]>;
  person = {
    id: '',
    name: '',
    lname: '',
    age: '',
    dept: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.personsRef = this.db.list('/people');
    this.persons = this.personsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.person.id = this.navParams.get('key');
    this.person.name = this.navParams.get('name');
    this.person.lname = this.navParams.get('lname');
    this.person.age = this.navParams.get('age');
    this.person.dept = this.navParams.get('dept');

  }

  updatePerson(id, name, lname, age, dept) {
    this.personsRef.update(this.person.id, {
      name: this.person.name,
      lname: this.person.lname,
      age: this.person.age,
      dept: this.person.dept
    }).then(uPerson => { this.navCtrl.pop(); }, error => { console.log(error); });
  }

}

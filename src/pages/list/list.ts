import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  locations:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationsProvider:LocationsProvider) {
    this.getLocations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  getLocations() {
    this.locationsProvider.getLocations()
    .then(data => {
      this.locations = data;
      console.log(this.locations);
    })
  }

}

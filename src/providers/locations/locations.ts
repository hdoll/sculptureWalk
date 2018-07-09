import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocationsProvider Provider');
  }

  getLocations() {
    return new Promise(resolve => {
      this.http.get('assets/data/locations.json').map(res => res.locations).subscribe(data => {
        resolve(data);
        //console.log(data);
      }, err => {
        console.log('error',err);
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddZipcodeService } from '../add-zipcode.service';
import { CurrentCondition } from '../currentCondition';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  zipcodes: Array<string> = [];
  subscriptions: Subscription;
  currentConditions: Array<object> = [];

  constructor(private addZipcode: AddZipcodeService) {}

  ngOnInit() {
    this.currentConditions =
      JSON.parse(localStorage.getItem('currentConditions')) ?? [];
  }

  addLocation(p) {
    let newArr = this.currentConditions.filter((a: CurrentCondition) => {
      return a.zipcode == p.value;
    });

    if (newArr.length > 0) {
      alert('Zipcode already added!');
    } else if (p.value == null || p.value == undefined || p.value == '') {
      alert('Please add a Zipcode!');
    } else {
      this.subscriptions = this.addZipcode.getCuurentWeather(p.value).subscribe(
        (resp: CurrentCondition) => {
          console.log(resp)
          let newObj = {};
          newObj['zipcode'] = p.value;
          newObj['location'] = resp.name;
          newObj['temp_min'] = resp.main['temp_min'];
          newObj['temp_max'] = resp.main['temp_max'];
          newObj['temp'] = resp.main['temp'];
          newObj['main'] = resp.weather[0].main == 'Clear' ? 'Sunny' : resp.weather[0].main;
          this.currentConditions.push(newObj);
          localStorage.setItem(
            'currentConditions',
            JSON.stringify(this.currentConditions)
          );
        },
        (error) => {
          alert('Error occured' + error.message);
        }
      );
    }
  }

  removeZipcode(p) {
    let newArr = this.currentConditions.filter((a: CurrentCondition) => {
      return a.zipcode == p;
    });
    this.currentConditions.splice(this.currentConditions.indexOf(newArr[0]), 1);
    localStorage.setItem(
      'currentConditions',
      JSON.stringify(this.currentConditions)
    );
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}

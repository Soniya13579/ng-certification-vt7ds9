import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddZipcodeService } from '../add-zipcode.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  zipcode: string
  dates: Date = new Date()
  forecast: Array<object> = []
  location: string
  subscriptions: Subscription

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private addZipcode: AddZipcodeService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.zipcode = params?.id
    })

    this.subscriptions = this.addZipcode.getforecast(this.zipcode).subscribe((resp: Forecast) => {
      this.location = resp.city.name
      let newObj = {}
      for(let i = 0; i < 5; i++) {
        newObj = {}
        newObj['temp_max'] = resp.list[i].temp.min
        newObj['temp_min'] = resp.list[i].temp.max
        newObj['main'] = resp.list[i].weather[0].main
        this.forecast.push(newObj)
      }
    },
    error => {
      alert('Error occured' + error.message);
    })
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}

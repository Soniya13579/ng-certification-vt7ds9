import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { CurrentCondition } from './currentCondition';
import { Forecast } from './forecast';

@Injectable()
export class AddZipcodeService {

  constructor(private http: HttpClient) { }

  getCuurentWeather(zipcode: string): Observable<CurrentCondition> {
    return this.http.get<CurrentCondition>(environment.apiUrl + "weather?zip="+zipcode+"&appid=" + environment.API_KEY)
  }

  getforecast(zipcode: string): Observable<Forecast> {
    return this.http.get<Forecast>(environment.apiUrl + "forecast/daily?zip="+zipcode+"&appid=" + environment.API_KEY)
  }
}
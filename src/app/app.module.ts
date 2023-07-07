import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddLocationComponent } from './weather/add-location/add-location.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { WeatherModule } from './weather/weather.module';
import { AddZipcodeService } from './weather/add-zipcode.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddLocationComponent,
    ForecastComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AddZipcodeService],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationComponent } from './weather/add-location/add-location.component';
import { ForecastComponent } from './weather/forecast/forecast.component';

const appRoutes: Routes = [
  { path: '', component: AddLocationComponent },
  { path:'addLocation', component: AddLocationComponent},
  { path: 'forecast/:id', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

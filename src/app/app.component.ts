import { Component } from '@angular/core';
import { WeatherResponce } from './interfaces/weather-interface';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba';
  consulta = false;
  placeholderciudad = 'Ingrese una ciudad';
  data: any;
  region = '';
  constructor(public weather: WeatherService) {}

  displayData() {
    if (this.region.length < 2) {
      alert('Ingrese mas datos');
      return;
    }
    this.weather.loadData().subscribe(
      (res) => {
        this.consulta = false;
        this.data = res;
        this.consulta = true;
      },
      (error) => {
        this.data = this.weather.dummyData(this.region);
        this.consulta = true;
      }
    );
  }
  displayDataTegus() {
    this.consulta = false;
    this.data = this.weather.dummyData('Tegucigalpa');
    this.consulta = true;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import dummyResponce from '../assets/Response_JSON.json';
import { WeatherResponce } from './interfaces/weather-interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  urlMocky = 'https://run.mocky.io/v3/166161dc-bed1-4681-b0d0-7c74cc0760ae';
  constructor(private httpClient: HttpClient) {}

  loadData() {
    return this.httpClient.get(this.urlMocky);
  }

  public dummyData(place: string): WeatherResponce {
    // una validacion para las 2 ciudades
    if (place.toLocaleLowerCase().includes('lond')) {
      place = 'London, UK';
    }
    if (place.toLocaleLowerCase().includes('tegu')) {
      place = 'Tegucigalpa, Honduras';
    }
    const find = dummyResponce.find((b) => b.region === place);
    if (find) {
      return find;
    } else {
      alert('Region no disponible');
      throw new Error('Error consulta');
    }
  }
}

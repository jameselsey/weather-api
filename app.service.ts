import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

export interface Daum {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: Weather[]
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}


@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    return 
    const response = await fetch('https://bin.org/post', {method: 'POST', body: 'a=1'});
    const data = await response.json();

    console.log(data);
  }
}

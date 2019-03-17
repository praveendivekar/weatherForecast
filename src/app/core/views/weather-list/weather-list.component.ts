import { Component, OnInit } from '@angular/core';
import { WEATHER_LIST_BUTTON_LABEL } from './weather-list-config';
import { CommonService } from '../../services/common.service';
import { WeatherListService } from '../../services/weather-list.service';
import { WeatherData, WeatherServiceResponse } from '../../interfaces/common-interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  public selectedCity: string;
  public buttonLabel: string;
  public groupedWeatherList: object;
  public weatherTimeStamps: Array<string>;

  constructor(
    private commonService: CommonService,
    private weatherDataService: WeatherListService
  ) { }

  ngOnInit() {
    this.selectedCity = 'Bengaluru';
    this.buttonLabel = WEATHER_LIST_BUTTON_LABEL;
    this.groupedWeatherList = [];
    this.weatherTimeStamps = [];
  }

  /**
   * method to get the weather data
   * @method getWeatherData
   * @param none - no input
   * @return none
   */
  public getWeatherData(): void {
    const serviceUrl = `${this.commonService.getBaseUrl()}q=${this.selectedCity}&mode=json&appid=${this.commonService.getApiKey()}`;
    this.weatherDataService.getWeatherData(serviceUrl)
      .subscribe((response: WeatherServiceResponse) => {
        this.parseResponse(response);
    });
  }

  /**
   * method to parse weather service response
   * @method parseResponse
   * @param weatherServiceResponse - service response
   * @return none
   */
  public parseResponse(weatherServiceResponse: WeatherServiceResponse): void {
    const { list } = weatherServiceResponse;
    const weatherList = [];
    this.groupedWeatherList = [];
    this.weatherTimeStamps = [];
    for (let itr = 0; itr < list.length; itr++) {
      weatherList.push({
        id: itr,
        temp: list[itr].main.temp,
        humidity: list[itr].main.humidity,
        windSpeed: list[itr].wind.speed,
        status: list[itr].weather[0].description,
        timeStamp: list[itr].dt_txt,
      });
    }

    this.groupedWeatherList = _.groupBy(weatherList, 'timeStamp');
    this.weatherTimeStamps = Object.keys(this.groupedWeatherList);
  }
}

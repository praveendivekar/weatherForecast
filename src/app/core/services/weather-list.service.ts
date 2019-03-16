import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorService } from './http-error.service';
import { WeatherServiceResponse } from '../interfaces/common-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherListService {

  constructor(
    private httpClient: HttpClient,
    private httpError: HttpErrorService
  ) { }

  /**
   * method to get the weather data
   * @method getWeatherData
   * @param serviceUrl - service url passed from page
   * @return accountDetails
   */
  public getWeatherData(serviceUrl: string): Observable<WeatherServiceResponse> {
    return this.httpClient.get<WeatherServiceResponse>(serviceUrl)
      .pipe(
        tap((weatherData: WeatherServiceResponse) => weatherData),
        catchError(this.httpError.handleError<any>('getWeatherData'))
      );
  }
}

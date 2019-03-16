import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseURL = environment.baseURL;
  private apiKey = environment.apiKey;

  constructor() { }

  /**
   * method to get the baseURL from environment
   * @method getBaseUrl
   * @param none - no input
   * @return baseUrl
   */
  public getBaseUrl(): string {
    return this.baseURL;
  }

  /**
   * method to get the api key
   * @method getApiKey
   * @param none - no input
   * @return apiKey
   */
  public getApiKey(): string {
    return this.apiKey;
  }
}

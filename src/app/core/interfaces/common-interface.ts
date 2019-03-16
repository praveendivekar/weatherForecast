// common interfaces for application

// parsed weather data interface
export interface WeatherData {
  id?: number;
  temp?: string;
  status?: string;
  windSpeed?: string;
  humidity?: number;
  timeStamp?: string;
}

// weather service response interface
export interface WeatherServiceResponse {
  city?: object;
  cnt?: number;
  cod?: string;
  list?: Array<any>;
  message: number;
}


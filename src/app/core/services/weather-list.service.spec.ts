import { TestBed } from '@angular/core/testing';

import { WeatherListService } from './weather-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorService } from './http-error.service';

describe('WeatherListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ],
    providers: [HttpErrorService]
  }));

  // check for the service creation
  it('weather list service should be created', () => {
    const service: WeatherListService = TestBed.get(WeatherListService);
    expect(service).toBeTruthy();
  });
});

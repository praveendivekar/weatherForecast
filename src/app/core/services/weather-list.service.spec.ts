import { TestBed } from '@angular/core/testing';

import { WeatherListService } from './weather-list.service';

describe('WeatherListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherListService = TestBed.get(WeatherListService);
    expect(service).toBeTruthy();
  });
});

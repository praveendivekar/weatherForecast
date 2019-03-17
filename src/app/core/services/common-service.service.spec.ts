import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let commonServiceInstance: CommonService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => { commonServiceInstance = new CommonService(); });

  // check for the service cretion
  it('common service should be created', () => {
    const commonService: CommonService = TestBed.get(CommonService);
    expect(commonService).toBeTruthy();
  });

  // check for getBaseUrl service
  it('#getBaseUrl should return value', () => {
    expect(commonServiceInstance.getBaseUrl()).toBeTruthy();
  });

  // check for getApiKey service
  it('#getApiKey should return value', () => {
    expect(commonServiceInstance.getApiKey()).toBeTruthy();
  });
});

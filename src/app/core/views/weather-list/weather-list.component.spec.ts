import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorService } from '../../services/http-error.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  let weatherListComponent: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        ButtonComponent,
        WeatherListComponent
      ],
      providers: [
        HttpErrorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    weatherListComponent = fixture.debugElement.query(By.css('weather-list-container'));
    fixture.detectChanges();
  });

  // check for weather list component creation
  it('should create weather list component', () => {
    expect(component).toBeTruthy();
  });
});

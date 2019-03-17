import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/shared/header/header.component';
import { FooterComponent } from './core/components/shared/footer/footer.component';
import { WeatherListComponent } from './core/views/weather-list/weather-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './core/components/shared/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorService } from './core/services/http-error.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        FooterComponent,
        WeatherListComponent,
        ButtonComponent,
        AppComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        HttpErrorService
      ]
    }).compileComponents();
  }));

  // check for the app container
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

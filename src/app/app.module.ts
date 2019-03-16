import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './core/views/weather-list/weather-list.component';
import { SharedModule } from './core/components/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonService } from './core/services/common.service';
import { HttpErrorService } from './core/services/http-error.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ CommonService, HttpErrorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

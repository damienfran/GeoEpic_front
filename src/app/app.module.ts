import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { TreasuresListComponent } from './treasures-list/treasures-list.component';
import { TestingComponent } from './testing/testing.component';
import { MystatsComponent } from './mystats/mystats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationPickerComponent,
    TreasuresListComponent,
    TestingComponent,
    MystatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

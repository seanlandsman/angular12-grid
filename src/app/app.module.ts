import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from '@ag-grid-community/angular';
import { AppComponent } from './app.component';
import {LicenseManager} from '@ag-grid-enterprise/core'

LicenseManager.setLicenseKey('<license key>')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

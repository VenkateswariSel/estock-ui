import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './services/company-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { SelectedDataService } from './services/selected-data.service';
import { LoginComponent } from './LoginComponents/login/login.component';
import { RegisterComponent } from './LoginComponents/register/register.component';
import RegistrationService from './services/login.service';
import { JwtInterceptor } from './services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule
  ],
  providers: [CompanyService,SelectedDataService,RegistrationService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
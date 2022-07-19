import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { companyDetails } from 'src/app/models/companyDetails';
import { CompanyService } from 'src/app/services/company-service.service';
import { Router } from '@angular/router';
import { SelectedDataService } from 'src/app/services/selected-data.service';
import RegistrationService from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companycode: String="";
  companyDetails : companyDetails | undefined;
  noCompany: Boolean=false;

  constructor(private companyService: CompanyService,private router: Router,private selectedService: SelectedDataService,private registrationService: RegistrationService) {
  registrationService.currrentlyLoggedIn.subscribe(data=>this.setCurrentlyLoggedIn(data));
   }
  setCurrentlyLoggedIn(data: Boolean): void {
   this.loggedIn=data;
  }

  loggedIn: Boolean = false;

 

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedin")=="true"){
      this.loggedIn=true;
    }
  }

  searchCompany(){
    const promise = this.companyService.getCompany(this.companycode)
    promise.subscribe(data => {
      this.setCompanyDetails(data);
    },
    error=>{this.noCompany=true;})

  }
  setCompanyDetails(data: companyDetails) {
    this.companyDetails = data;
    this.selectedService.updateSelectedCompany(this.companyDetails);

    this.router.navigateByUrl("/showcompany");

  }

  logout(){
    this.registrationService.userlogout();
  
  }

}
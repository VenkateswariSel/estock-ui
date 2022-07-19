import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { companyDetails } from '../models/companyDetails';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {

  constructor() { }

  private selectedCompany: companyDetails ={
    "companyCode":"",
    "companyName":"",
    "ceo" :"",
    "companyTurnover" : 0,
    "companyWebsiteUrl" :"",
    "stockExchange" : "",
    "stockPrice":0.0
  };
currentlySelectedCompany = new BehaviorSubject(this.selectedCompany);

  updateSelectedCompany(companyDetails: companyDetails){
    this.currentlySelectedCompany.next(companyDetails);
  }

}
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { companyDetails } from '../models/companyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private COMPANY_URL: string="http://localhost:9090/company-service-bs/api/v1.0/market/company";

  constructor(private http: HttpClient) { }

  @Output() clearTable: EventEmitter<Boolean> = new EventEmitter();

  getCompany(companycode : String){
    this.clearTable.emit(true);
    return this.http.get<companyDetails>(this.COMPANY_URL+"/info/"+companycode);
  }
}
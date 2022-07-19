import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { companyDetails } from 'src/app/models/companyDetails';
import { StockDetails } from 'src/app/models/StockDetails';
import { StockInfo } from 'src/app/models/StockInfo';
import { CompanyService } from 'src/app/services/company-service.service';
import { SelectedDataService } from 'src/app/services/selected-data.service';
import { StockServiceService } from 'src/app/services/stock-service.service';

class PeriodicElement{
  position: number=0;
  name: String="";
  weight: number=0.0;
  symbol:String="";

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {


  companyDetails : companyDetails = new companyDetails;

  stockDetailsArray : StockDetails[] = [];

  stockAvailable : Boolean = false;

  stockInfoAvailable : Boolean = false;

  stockInfo : StockInfo = new StockInfo;
 
  constructor(private companyService: CompanyService, private selectedDataService : SelectedDataService,private stockService: StockServiceService) { }
  displayedColumns: string[] = ['Stock', 'Date'];
  dataSource = ELEMENT_DATA;
  from : Date = new Date;
  to : Date = new Date;


  ngOnInit(): void {
    this.selectedDataService.currentlySelectedCompany.subscribe(data=>{
      this.setCompanyDetails(data);
    })
    this.companyService.clearTable.subscribe(data=>this.setClearTable(data));
  }
  setClearTable(data: Boolean): void {
    if(data){
      this.stockDetailsArray = [];
      this.stockAvailable = false;
      this.stockInfo = new StockInfo;
      this.stockInfoAvailable= false;
    }
  }

  setCompanyDetails(companyDetails : companyDetails){
    this.companyDetails=companyDetails;
    console.log(this.companyDetails);
  }


  searchstocks(){
    const promise= this.stockService.getStock(this.companyDetails.companyCode,this.from,this.to);
    promise.subscribe(data=>{
      this.assignToArray(data);
    });
    const data = this.stockService.getStockInfo(this.companyDetails.companyCode,this.from,this.to);
    data.subscribe(result=>{
      this.assignToInfo(result);
    });

  }
  assignToInfo(result: StockInfo) {
    this.stockInfo = result;
    this.stockInfoAvailable = true;
  }
  assignToArray(data: StockDetails[]) {
    this.stockDetailsArray = data;
    this.stockAvailable = true;
     
  }

  

}
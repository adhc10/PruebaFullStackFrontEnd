import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Bill } from 'src/app/bill';
import { DataService } from 'src/app/service/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills:any;
  client:any;
  bill= new Bill();

  bill_numberCtrl = new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(5)],);
  totalCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  companyCtrl = new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)],);
  idclientCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getBillsData();
    this.getClients();
  }
  getBillsData(){
    this.dataService.getDataBills().subscribe(res => {
       this.bills=res;
    });
  }
  getClients(){
    this.dataService.getClients().subscribe(res => {
      this.client=res;
   });
  }
  deleteData(id: any){
    this.dataService.deleteDataBills(id).subscribe(res => {
      this.getBillsData();
    })
  }
  insertData(){
    this.dataService.insertDataBills(this.bill).subscribe(res => {
      this.getBillsData();
    });
  } 

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Bill } from 'src/app/bill';

@Component({
  selector: 'app-bills-edit',
  templateUrl: './bills-edit.component.html',
  styleUrls: ['./bills-edit.component.css']
})
export class BillsEditComponent implements OnInit {
  id:any;
  data:any;
  bill=new Bill();
  constructor(private route:ActivatedRoute ,private dataService: DataService) { }
  client:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
    this.getClients();
  }
  getData(){
    this.dataService.getBillById(this.id).subscribe(res => {
      //console.log(res);
      this.data= res;
      this.bill= this.data;
    })
  }
  getClients(){
    this.dataService.getClients().subscribe(res => {
      this.client=res;
   });
  }
  updateBill(){
    this.dataService.updateDataBills(this.id,this.bill).subscribe(res => {
      window.location.assign('bills');
    });
  }

}

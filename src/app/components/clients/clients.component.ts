import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;
  client=new Client();

  nameCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  lastnameCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  phonenumberCtrl = new FormControl('', [Validators.required,Validators.minLength(7),Validators.maxLength(10)],);
  identificationCtrl = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)],);
  birthCtrl = new FormControl('', [Validators.required],);

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getClientsData();
  }
  getClientsData(){
    this.dataService.getData().subscribe(res => {
       this.clients=res;
    });
  }
  insertData(){    
    this.dataService.insertData(this.client).subscribe(res => {
      this.getClientsData();
    });
  } 
  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res => {
      this.getClientsData();
    })
  }
}

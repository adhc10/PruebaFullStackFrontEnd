import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Bill } from '../bill';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients');
  }
  insertData(data: Client){
    return this.httpClient.post('http://127.0.0.1:8000/api/clients', data);
  }
  deleteData(id :any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/clients/'+id);
  }
  getClientById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients/'+id);
  }
  updateData(id:any,data: Client){
    return this.httpClient.put('http://127.0.0.1:8000/api/clients/'+id, data);
  }
  getDataBills(){
    return this.httpClient.get('http://127.0.0.1:8000/api/bills');
  }  
  getClients(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients');
  }
  deleteDataBills(id :any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/bills/'+id);
  }
  getBillById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/bills/'+id);
  }
  updateDataBills(id:any,data: Bill){
    return this.httpClient.put('http://127.0.0.1:8000/api/bills/'+id, data);
  }
  insertDataBills(data: Bill){
    return this.httpClient.post('http://127.0.0.1:8000/api/bills', data);
  }
  getExceptionData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/exceptions');
  }
}

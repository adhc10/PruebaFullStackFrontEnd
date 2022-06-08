import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.css']
})
export class ExceptionsComponent implements OnInit {
  exceptions:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getExceptionData();
  }
  getExceptionData(){
    this.dataService.getExceptionData().subscribe(res => {
       this.exceptions=res;
    });
  }

}

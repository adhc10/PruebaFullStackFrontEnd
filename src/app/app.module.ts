import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { BillsComponent } from './components/bills/bills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExceptionsComponent } from './components/exceptions/exceptions.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { BillsEditComponent } from './components/bills-edit/bills-edit.component';

const appRoutes: Routes=[
  { path: '',component:ClientsComponent  },
  { path: 'editClient/:id',component:ClientsEditComponent },  
  { path: 'bills',component:BillsComponent },
  { path: 'editBill/:id',component:BillsEditComponent },
  { path: 'exceptions',component:ExceptionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    BillsComponent,
    ExceptionsComponent,
    ClientsEditComponent,
    BillsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

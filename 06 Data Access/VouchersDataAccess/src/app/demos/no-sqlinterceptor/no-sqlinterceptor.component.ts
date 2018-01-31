import { FirebaseService } from './../firebase.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-sqlinterceptor',
  templateUrl: './no-sqlinterceptor.component.html',
  styleUrls: ['./no-sqlinterceptor.component.css']
})
export class NoSQLInterceptorComponent implements OnInit {

  constructor(private fbs: FirebaseService) { }
   
  result : any ;

  ngOnInit() {
  
  }

  insertVoucher(){    
    var voucher = { "ID": 1, "Text": "Inserted by Angular", "Date": new Date(), "Amount": 99, "Paid": true, "Expense": false, "VATRate" : 20 }
    this.fbs.insertVoucher(voucher)
      .subscribe((response)=>{
        this.result = response;
      }, 
      (err)=>console.log(err));
  }

  getVouchers(){    
    this.fbs.getVouchers().subscribe((data)=>{
      this.result = data;
    });
  }

  deleteVouchers(){    
    this.fbs.deleteVouchers().subscribe((data)=>{
      this.result = data;
    });
  }
}

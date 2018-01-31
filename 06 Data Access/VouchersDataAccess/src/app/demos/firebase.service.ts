import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Voucher } from '../shared/index';

@Injectable()
export class FirebaseService {

    //Enter your firebase AppUrl Here, add your token to environment 
    url: string = "https://angular-b2207.firebaseio.com/"; 
    headers = new HttpHeaders().set('Authorization','Bearer' + environment.firebaseToken)

    result: any;
    
    constructor(private httpClient: HttpClient){    }

    insertVoucher(v){
      //post appends, put overwrites
      return this.httpClient.post(this.url + "data.json", v); 

      // custom header
      // return this.httpClient.post(this.url + "data.json", v,{headers: this.headers});
    }

    getVouchers() : Observable<any> {    
      return this.httpClient.get(this.url + "data.json");
    }

    deleteVouchers(){
      return this.httpClient.delete(this.url + "data.json");
    }

}
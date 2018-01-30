
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";

@Injectable()
export class VouchersService {
    constructor(private http: HttpClient) { }

    vouchers = null;

    getVouchers() : Promise<Voucher[]> {
        return this.http.get<Voucher[]>('/assets/vouchers.json').toPromise();          
    }
    
    getVoucher(id: number) : Promise<Voucher> {
        return new Promise<Voucher>((resolve, reject)=>{
            this.http.get('/assets/vouchers.json').toPromise()
            .then((data: Voucher[])=>{
                var v = data.filter((item: Voucher) => item.ID == id)
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
        })
    }
}
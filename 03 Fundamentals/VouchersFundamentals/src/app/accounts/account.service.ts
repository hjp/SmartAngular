
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from "../shared/index";

@Injectable()
export class AccountsService {
    constructor(private http: HttpClient) { }

    Accounts = null;

    getAccounts() : Promise<Account[]> {
        return this.http.get<Account[]>('/assets/accounts.json').toPromise();          
    }
    
    getAccount(id: number) : Promise<Account> {
        return new Promise<Account>((resolve, reject)=>{
            this.http.get('/assets/Accounts.json').toPromise()
            .then((data: Account[])=>{
                var v = data.filter((item: Account) => item.ID == id)
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
        })
    }
}
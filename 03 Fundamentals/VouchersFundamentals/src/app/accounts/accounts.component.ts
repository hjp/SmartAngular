import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from './account.service'
import { Account } from "../shared/index";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];
  constructor(private as: AccountsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.as.getAccounts().then(data => this.accounts = data);

  }

}

import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account } from '../../shared/index';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(private as: AccountsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.as.getAccount(this.route.snapshot.params['id']).then(data => {
      this.account = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  accountNo: number = 0;
  balance: number = 0;
  showDetails: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.accountNo = this.authService.getAccountNo();
    this.balance = this.authService.getBalance;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}

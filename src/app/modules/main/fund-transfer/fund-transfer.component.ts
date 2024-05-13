import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.scss']
})
export class FundTransferComponent {
  fromAccount = this.authService.getAccountNo();
  toAccount: string = '';
  verifyAccountNo: string = ''
  amount: number = 0;

  constructor(private authService: AuthService){}

  sendAmount(){
    const totalBalance = this.authService.getBalance;
    if(this.toAccount.length !== 9){
      return alert('Kindly check receiver account no');
    }
    if(this.verifyAccountNo !== this.toAccount){
      return alert("Please check Receiver account number")
    }
    if(this.amount <= totalBalance){
      alert("Amount sent successful");
      let currentBalance = totalBalance - this.amount;
      this.authService.updateBalance = currentBalance;
    }else{
      alert("Insufficient Balance");
    }
  }
}

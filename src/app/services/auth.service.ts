import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private username = 'user1'
  private password: string = 'user1'
  private accountno: number = 123456789
  private balance: number = 10000
  firstname: string = 'kumar'
  mobileno: number = 9876543211
  email: string = 'kumar@gmail.com'
  city: string = 'madurai'
  nominee: string = ''
  nomineeAadhaar: number = 0

  constructor() { }

  getUsername(): string  {
    return this.username;
  }

  getPassword(): string  {
    return this.password;
  }

  getAccountNo(): number {
    return this.accountno;
  }

  public get getBalance(): number {
    return this.balance;
  }

  public set updateBalance(amount: number){
    this.balance = amount;
  }

  getProfile(){
    return {
      firstname: this.firstname,
      mobileno:this.mobileno,
      email: this.email,
      city: this.city
    }
  }
}


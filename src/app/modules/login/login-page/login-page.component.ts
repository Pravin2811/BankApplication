import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router){
    // this.username = authService.getUsername();
    // this.password = authService.getPassword();
  }

  onSubmit(){
    if (this.authService.getUsername() === this.username && this.authService.getPassword() === this.password) {
      this.router.navigateByUrl('main');
      // alert('Login successful')
      console.log('success')
    }else{
      console.log('Try again');
      alert('Username or Password Incorrect')
    }
  }
}


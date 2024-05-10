import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.scss']
})
export class NomineeComponent {
  nominee: string = '';
  aadhaar: number = 0;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    // Initialize profile data
    this.nominee = this.authService.nominee;
    this.aadhaar = this.authService.nomineeAadhaar;
  }

  onUpdate(){
    this.router.navigate(['main/update-nominee',  JSON.stringify({nominee: this.nominee, aadhaar: this.aadhaar})],{skipLocationChange: true})
  }

  onDelete(){
    this.nominee = ''
    this.aadhaar = 0
    this.authService.nominee = ''
    this.authService.nomineeAadhaar = 0
  }
}

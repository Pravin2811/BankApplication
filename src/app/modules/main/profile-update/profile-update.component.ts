import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent {
  @Input() email: string = '';
  @Input() city: string = '';
  result: any;
  @Output() updatedProfile: EventEmitter<{ email: string, city: string }> = new EventEmitter();

  constructor(private authService:AuthService,private Route: ActivatedRoute,public router: Router){}
  ngOnInit(){
    this.Route.params.subscribe(param => {
      this.result = JSON.parse(param['data'])
    })
  }

  // onSave(){
  //   this.updatedProfile.emit({ email: this.email, city: this.city });
  //   // console.log(this.email);
    
  //   this.authService.email = this.email
  //   this.authService.city = this.city
  //   // console.log(this.authService.email);
    
  // }

  onSave() {
    //this.updatedProfile.emit({ email: this.email, city: this.city });
    this.authService.email = this.email
    this.authService.city = this.city
    this.router.navigate(['/main/profile']);
  }
}

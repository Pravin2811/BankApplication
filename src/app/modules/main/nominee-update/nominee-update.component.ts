import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nominee-update',
  templateUrl: './nominee-update.component.html',
  styleUrls: ['./nominee-update.component.scss']
})
export class NomineeUpdateComponent {
  @Input() name: string = '';
  @Input() aadhaar: number = 0;
  result: any;
  @Output() updatedProfile: EventEmitter<{ email: string, city: string }> = new EventEmitter();

  constructor(private authService:AuthService,private Route: ActivatedRoute,public router: Router){}
  ngOnInit(){
    this.Route.params.subscribe(param => {
      this.result = JSON.parse(param['data'])
    })
  }

  onSave() {
    this.authService.nominee = this.name
    this.authService.nomineeAadhaar = this.aadhaar
    this.router.navigate(['/main/nominee-maintenance']);
  }
}

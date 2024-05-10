import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeUpdateComponent } from './nominee-update.component';

describe('NomineeUpdateComponent', () => {
  let component: NomineeUpdateComponent;
  let fixture: ComponentFixture<NomineeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

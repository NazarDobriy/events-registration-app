import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParticipantFormComponent } from './register-participant-form.component';

describe('RegisterParticipantFormComponent', () => {
  let component: RegisterParticipantFormComponent;
  let fixture: ComponentFixture<RegisterParticipantFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterParticipantFormComponent]
    });
    fixture = TestBed.createComponent(RegisterParticipantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

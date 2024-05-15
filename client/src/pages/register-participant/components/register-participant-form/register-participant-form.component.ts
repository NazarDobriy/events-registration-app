import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IParticipant } from 'src/types/participant.interface';

@Component({
  selector: 'app-register-participant-form',
  templateUrl: './register-participant-form.component.html'
})
export class RegisterParticipantFormComponent {
  today = new Date();
  formGroup: FormGroup;
  options = ['Social media', 'Friends', 'Found myself'];
  emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  @Output() submitSelect = new EventEmitter<IParticipant>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailRegExp)]],
      birthDate: ['', Validators.required],
      referralSource: ['myself', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const participant: IParticipant = {
        name: this.formGroup.get('name')?.value,
        email: this.formGroup.get('email')?.value,
        birthDate: new Date(this.formGroup.get('birthDate')?.value),
        referralSource: this.formGroup.get('referralSource')?.value
      };
      this.submitSelect.emit(participant);
    }
  }
}

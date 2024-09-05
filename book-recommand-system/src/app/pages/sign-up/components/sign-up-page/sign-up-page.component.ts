import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  // formGroup: FormGroup;
  selectedGender: string = '';

  formGroup: FormGroup = this.createForm();
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }

  onGenderChange(gender: string) {
    this.formGroup.get('gender')?.setValue(gender, { emitEvent: false });
    console.log(this.formGroup.value);
  }

  confirmId() {

  }

  confirmPassword() {

  }

  submit() {

  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      nickname: [null, Validators.required],
      birthday: [null, Validators.required],
      gender: [null, Validators.required]
    });
  }
}

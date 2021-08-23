import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { passwordValidators } from './password.validation';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      passwordValidators.cannotContainSpace],
      [passwordValidators.wrongPassword]
    ),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,32}'),
      passwordValidators.cannotContainSpace,
    ]
    ),
    confirmPassword: new FormControl('', [
      Validators.required,
    ],

    ),
  }, { validators: passwordValidators.shouldMatch });


  //      form:FormGroup;
  //  constructor(fb:FormBuilder){
  //     this.form=fb.group({
  //       oldPassword:['',
  //             Validators.required,
  //             Validators.minLength(3),
  //             passwordValidators.cannotContainSpace,
  //             passwordValidators.wrongPassword
  //       ],
  //           newPassword:['',
  //           Validators.required,
  //           Validators.minLength(3),
  //           passwordValidators.cannotContainSpace,
  //           ],
  //           confirmPassword:['',
  //           Validators.required,
  //           Validators.minLength(3),
  //           passwordValidators.cannotContainSpace,
  //           ]},
  //           {validator:passwordValidators.shouldMatch }
  //     );
  //   }
  get f() {
    return this.form.controls;
  }
  get oldPassword() { return this.form.get('oldPassword') as FormControl; }
  get newPassword() { return this.form.get('newPassword')as FormControl; }
  get confirmPassword() { return this.form.get('confirmPassword') as FormControl; }

}

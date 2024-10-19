import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from 'app/config/error.constants';
import SharedModule from 'app/shared/shared.module';
import PasswordStrengthBarComponent from '../password/password-strength-bar/password-strength-bar.component';
import { RegisterService } from './register.service';
import { MaterialModule } from 'app/material.module';
import { CaptchaComponent } from 'app/shared/components/captcha/captcha.component';
import { BaseComponent } from 'app/base/base.component';
import { CaptchaService } from 'app/shared/service/captcha.service';
import { BaseDependency } from 'app/base/dependency/base.dependency';
import { CaptchaModel } from 'app/shared/models/captcha.model';

@Component({
  standalone: true,
  selector: 'jhi-register',
  imports: [SharedModule,  FormsModule, ReactiveFormsModule, PasswordStrengthBarComponent, MaterialModule],
  templateUrl: './register.component.html',
})
export default class RegisterComponent extends BaseComponent implements OnInit {
  login = viewChild.required<ElementRef>('login');
  @ViewChild('captcha', { static: false }) captcha!: CaptchaComponent;
  captchaValidated2 = false;
  returnedCaptcha!: CaptchaModel;


  doNotMatch = signal(false);
  error = signal(false);
  errorEmailExists = signal(false);
  mobileOrEmailRequired = signal(false);
  success = signal(false);

  registerForm = new FormGroup({
    mobileNumber: new FormControl('', {
      nonNullable: true,
      validators: [

        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[6-9]\\d{9}$'),
      ],
    }),
    firstName: new FormControl('', {nonNullable:true, validators: [Validators.maxLength(50)] }),
    lastName: new FormControl( '',{nonNullable:true,  validators: [Validators.maxLength(50)] }),
   email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(5), Validators.maxLength(254), Validators.pattern(this.patternConstants.EMAIL)],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    }),
  });

  private registerService = inject(RegisterService);
  private captchaService = inject(CaptchaService);

  constructor(public base: BaseDependency) {
    super(base);
  }

  ngOnInit(): void {
    this.doNotMatch.set(false);
   
  }
  returnCaptcha(cap: CaptchaModel):void{
    this.returnedCaptcha=cap;
   }

  verifyCaptcha(): void {
   /*  const returnedCaptcha = this.captcha.returnCaptcha(); */
    this.captchaService.validateCaptcha(this.returnedCaptcha).subscribe(valid => {
      if (this.returnedCaptcha.key === valid.key) {
        this.register();
      } else {
        this.toastrService.error('Invalid Captcha');
        this.captcha.refreshCaptcha();
      }
    });
  }

  register(): void {
    this.doNotMatch.set(false);
    this.error.set(false);
    this.errorEmailExists.set(false);
    this.mobileOrEmailRequired.set(false);

    const { password, confirmPassword } = this.registerForm.getRawValue();
    if (password !== confirmPassword) {
      this.doNotMatch.set(true);
    } else {
      const { mobileNumber, email } = this.registerForm.getRawValue();
      if (mobileNumber === '' && email === '') {
        this.mobileOrEmailRequired.set(true);
      } else {
        const login = email !== '' ? email : mobileNumber;
        const { firstName, lastName } = this.registerForm.getRawValue();
        this.registerService
          .save({ login, firstName, lastName, mobileNumber, email, password, langKey: this.translateService.currentLang })
          .subscribe({ next: () => this.success.set(true), error: response => this.processError(response) });
      }

    }
  }

  private processError(response: HttpErrorResponse): void {
    if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.mobileOrEmailRequired.set(true);
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists.set(true);
    } else {
      this.error.set(true);
    }
  }
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { LoginService } from 'app/login/login.service';
import { MaterialModule } from 'app/material.module';
import { CaptchaComponent } from 'app/shared/components/captcha/captcha.component';
import { CaptchaService } from 'app/shared/service/captcha.service';
import { TranslateDirective } from 'app/shared/language';
import { BaseComponent } from 'app/base/base.component';
import { BaseDependency } from 'app/base/dependency/base.dependency';
import { CaptchaModel } from 'app/shared/models/captcha.model';

@Component({
  standalone: true,
  selector: 'jhi-login',
  imports: [SharedModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent extends BaseComponent implements OnInit {
  username = viewChild.required<ElementRef>('username');

  authenticationError = signal(false);
  @ViewChild('captcha', { static: false }) captcha!: CaptchaComponent;
  captchaValidated =false;
  returnedCaptcha!: CaptchaModel;

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  private loginService = inject(LoginService);
  private captchaService = inject(CaptchaService);


  constructor(
    public base: BaseDependency,

  ) {
    super(base);
  }

  ngOnInit(): void {
    
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['']);
      }else{
        this.authenticationError.set(false);
      
   
      }
    });
  }



  login(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.authenticationError.set(false);
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this.router.navigate(['']);
        }
      },
      error: () => this.authenticationError.set(true),
    });
  }

  returnCaptcha(cap: CaptchaModel):void{
   this.returnedCaptcha=cap;
  }

  verifyCaptcha(): void {
    
    this.captchaService.validateCaptcha(this.returnedCaptcha).subscribe(valid => {
      if (this.returnedCaptcha.key === valid.key) {
        this.login();
      } else {
        this.toastrService.error('Invalid Captcha');
        this.captcha.refreshCaptcha();
      }
    });
  }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CaptchaModel } from 'app/shared/models/captcha.model';
import { CaptchaService } from 'app/shared/service/captcha.service';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'jhi-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
 
})
export class CaptchaComponent implements OnInit, OnDestroy {
  @Input() validated!: boolean;
  @Output() captchaEvent = new EventEmitter<CaptchaModel>();

  
  key!: string;
  cap!: CaptchaModel;
  capLoaded = false;
  getCaptchaSubscription?: Subscription;
  getCaptchaSubscription2?: Subscription;
  refreshCaptchaSubscription?: Subscription;

  constructor(
    public captchaService: CaptchaService,
    public _sanitizer: DomSanitizer,
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.getCaptchaSubscription = this.captchaService.getCaptchaFromBackend().subscribe(cap => {
      this.cap = cap;
      this.capLoaded = true;
    });
  }

  refreshCaptcha(): void {
    this.key = '';
    this.refreshCaptchaSubscription = this.captchaService.refreshCaptcha(this.cap.id).subscribe(captcha1 => {
      this.cap = captcha1;
    });
  }

  getCaptcha(): void {
    this.key = '';
    this.getCaptchaSubscription2 = this.captchaService.getCaptchaFromBackend().subscribe(cap => {
      this.cap = cap;
      this.capLoaded = true;
    });
  }

  deleteCaptcha(toDelete: CaptchaModel): void {
    let captchaToDelete = new CaptchaModel();
    captchaToDelete = Object.assign(captchaToDelete, toDelete);
    this.captchaService.deleteCaptcha(captchaToDelete);
  }

  validateCaptcha(): Observable<CaptchaModel> {
    const captcha = new CaptchaModel();
    captcha.id = this.cap.id;
    captcha.key = this.key;
    const validated = this.captchaService.validateCaptcha(captcha);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (validated) {
      this.validated = true;
    }
    return validated;
  }

 /*  returnCaptcha(): CaptchaModel {
    const captcha = new CaptchaModel();
    captcha.id = this.cap.id;
    captcha.key = this.key;
    return captcha;
  } */

  returnCaptcha():any {
    if(this.key.length<7){
      const captcha = new CaptchaModel();
      captcha.id = this.cap.id;
      captcha.key = this.key;
      this.captchaEvent.emit(captcha);
    }
    
  }

  ngOnDestroy(): void {
    if (!this.validated) {
      this.deleteCaptcha(this.cap);
    }
    if (this.getCaptchaSubscription) {
      this.getCaptchaSubscription.unsubscribe();
    }
    if (this.getCaptchaSubscription2) {
      this.getCaptchaSubscription2.unsubscribe();
    }
    if (this.refreshCaptchaSubscription) {
      this.refreshCaptchaSubscription.unsubscribe();
    }
  }
}

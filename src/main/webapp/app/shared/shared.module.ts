import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

import FindLanguageFromKeyPipe from './language/find-language-from-key.pipe';
import TranslateDirective from './language/translate.directive';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Application wide Module
 */
@NgModule({
  imports: [ CommonModule, AlertComponent, AlertErrorComponent, FindLanguageFromKeyPipe, TranslateDirective, MaterialModule, TranslateModule, FormsModule, ReactiveFormsModule],

  declarations: [CaptchaComponent],
  exports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    AlertComponent,
    AlertErrorComponent,
    TranslateModule,
    FindLanguageFromKeyPipe,
    TranslateDirective,
    FormsModule,
    ReactiveFormsModule,
    CaptchaComponent
  ],
})
export default class SharedModule { }

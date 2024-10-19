import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaptchaModel } from '../models/captcha.model';


@Injectable({ providedIn: 'root' })
export class CaptchaService {
  constructor(private http: HttpClient) {}

  getCaptchaFromBackend(): Observable<CaptchaModel> {
    return this.http.get<CaptchaModel>(SERVER_API_URL + 'api/getCaptcha', {});
  }

  refreshCaptcha(id: any): Observable<CaptchaModel> {
    return this.http.get<CaptchaModel>(SERVER_API_URL + 'api/refreshCaptcha', {
      params: new HttpParams().set('id', id),
    });
  }

  validateCaptcha(captcha: CaptchaModel): Observable<CaptchaModel> {
    return this.http.post<CaptchaModel>(SERVER_API_URL + 'api/validateCaptcha', captcha, {});
  }

  deleteCaptcha(captcha: CaptchaModel): Observable<boolean> {
    return this.http.post<boolean>(SERVER_API_URL + 'api/deleteCaptcha', captcha, {});
  }
}

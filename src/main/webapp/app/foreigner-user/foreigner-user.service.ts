import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDashboard } from 'app/shared/models/dashboard.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ForeignerUserService {
  constructor(private http: HttpClient) { }

  getUserDashboardCount(): Observable<UserDashboard> {
    return this.http.get<UserDashboard>(SERVER_API_URL + 'api/getUserDashboardCount', {});
  }


}

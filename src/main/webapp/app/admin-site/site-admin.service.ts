import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SiteAdminDashboard } from 'app/shared/models/dashboard.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SiteAdminService {
  constructor(private http: HttpClient) {}

  getSiteAdminDashboardCount(): Observable<SiteAdminDashboard> {
    return this.http.get<SiteAdminDashboard>(SERVER_API_URL + 'api/getSiteAdminDashboardCount', {});
  }
  /* save(district: DistrictModel): Observable<{}> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/finish'), { key, newPassword });
  }
 */
  
}

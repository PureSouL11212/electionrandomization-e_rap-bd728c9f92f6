import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { BaseDependency } from '../../base/dependency/base.dependency';
import { SiteAdminDashboard } from 'app/shared/models/dashboard.model';
import { SiteAdminService } from '../site-admin.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import SharedModule from 'app/shared/shared.module';
@Component({
  standalone:true,
  selector: 'jhi-department-content.area',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[CommonModule, SharedModule, MaterialModule],
})
export default class SiteAdminDashboardComponent extends BaseComponent implements OnInit {
  siteAdminDashboard!: SiteAdminDashboard;

  constructor(
    private base: BaseDependency,
    private siteAdminService: SiteAdminService,
  ) {
    super(base);
  }

  ngOnInit(): void {
    this.siteAdminDashboard = new SiteAdminDashboard();
    this.siteAdminService.getSiteAdminDashboardCount().subscribe(res => {
      this.siteAdminDashboard = res;
    });
  }
}

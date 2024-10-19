import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'app/material.module';
import { UserDashboard } from 'app/shared/models/dashboard.model';
import SharedModule from 'app/shared/shared.module';
import { BaseComponent } from '../../base/base.component';
import { BaseDependency } from '../../base/dependency/base.dependency';
import { ForeignerUserService } from '../foreigner-user.service';
@Component({
  standalone: true,
  selector: 'jhi-department-content.area',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export default class UserDashboardComponent extends BaseComponent implements OnInit {
  userDashboard!: UserDashboard;

  constructor(
    private base: BaseDependency,
    private foreignerUserService: ForeignerUserService,
  ) {
    super(base);
  }

  ngOnInit(): void {
    this.userDashboard = new UserDashboard();
    this.foreignerUserService.getUserDashboardCount().subscribe(res => {
      this.userDashboard = res;
    });
  }
}

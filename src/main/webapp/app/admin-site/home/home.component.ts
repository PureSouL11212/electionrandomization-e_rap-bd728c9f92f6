import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'app/core/auth/account.model';
import { BaseComponent } from 'app/base/base.component';
import { BaseDependency } from 'app/base/dependency/base.dependency';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';
import { MaterialModule } from 'app/material.module';

@Component({
  standalone:true,
  selector: 'jhi-site-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[RouterModule, SharedModule, MaterialModule],
})
export default class SiteAdminHomeComponent extends BaseComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: any;
  account: any;
  user?: Account | null;
  subscription?: Subscription;
  loaded = false;
  userName!: string;

  constructor(public baseDependancy: BaseDependency) {
    super(baseDependancy);
  }

  ngOnInit(): void {
    this.accountService.getAuthenticationState().subscribe(acc => {
      if (acc !== null) {
        this.user = acc;
        this.userName = this.user.firstName!;
        /*  if (this.user.middleName !== null) {
          this.userName = this.userName + ' ' + this.user.middleName;
        } */
        if (this.user.lastName !== null) {
          this.userName = this.userName + ' ' + this.user.lastName;
        }
      } else {
        this.router.navigate(['/']);
      }
      this.loaded = true;
    });
  }

  snavToggle(): void {
    this.sidenav.toggle();
  }

  onDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}

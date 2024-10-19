import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import LoginComponent from 'app/login/login.component';
import { MaterialModule } from 'app/material.module';
import { Authority } from 'app/config/authority.constants';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SharedModule, RouterModule, LoginComponent, MaterialModule],
})
export default class HomeComponent implements OnInit, OnDestroy {
  account = signal<Account | null>(null);

  private readonly destroy$ = new Subject<void>();

  private accountService = inject(AccountService);
  private router = inject(Router);

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => {
        this.account.set(account);
        if (this.account() !== null) {
          this.checkAuthorityAndRedirect();
          /*   this.toastrService.success('Here in account'); */
        }
      });
  }

  checkAuthorityAndRedirect(): void {
    if (this.accountService.isAuthenticated()) {
      if (this.accountService.hasAnyAuthority([Authority.SITE_ADMIN])) {
        this.router.navigate(['site-admin/dashboard']);
      }
      if (this.accountService.hasAnyAuthority([Authority.USER])) {
        this.router.navigate(['user/dashboard']);
      }

    }
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  register(): void {
    this.router.navigate(['/register']);
  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}

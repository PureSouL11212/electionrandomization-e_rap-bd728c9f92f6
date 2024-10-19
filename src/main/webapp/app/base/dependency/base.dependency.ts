import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'app/core/auth/account.service';
import { StateStorageService } from 'app/core/auth/state-storage.service';
import { UserService } from 'app/entities/user/service/user.service';
import { NetworkService } from 'app/shared/service/network.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class BaseDependency {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public accountService: AccountService,
    public userService: UserService,
    public toastrService: ToastrService,
    public networkService: NetworkService,
    public stateStorageService: StateStorageService,
    public _location: Location,
    public translateService: TranslateService,
  ) {}
}

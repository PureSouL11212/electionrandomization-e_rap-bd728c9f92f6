import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatternConstants } from 'app/app.constants';
import { AccountService } from 'app/core/auth/account.service';
import { StateStorageService } from 'app/core/auth/state-storage.service';
import { ToastrService } from 'ngx-toastr';
import * as swal from 'sweetalert2';
import { BaseDependency } from './dependency/base.dependency';
import { UserService } from 'app/entities/user/service/user.service';
import { NetworkService } from 'app/shared/service/network.service';

@Component({
  template: '',
})
export class BaseComponent  {
  public patternConstants = PatternConstants;
  protected route: ActivatedRoute;
  protected router: Router;
  protected stateStorgeService: StateStorageService;
  protected userService: UserService;
  protected toastrService: ToastrService;
  protected accountService: AccountService;
  protected myswal: any;
  protected _location: Location;
  protected translateService: TranslateService;
  protected networkService: NetworkService;

  constructor(protected baseDependency: BaseDependency) {
    this.route = baseDependency.route;
    this.router = baseDependency.router;
    this.stateStorgeService = baseDependency.stateStorageService;
    this.userService = baseDependency.userService;
    this.toastrService = baseDependency.toastrService;
    this.accountService = baseDependency.accountService;
    this._location = baseDependency._location;
    this.myswal = swal;
    this.translateService = baseDependency.translateService;
    this.networkService = baseDependency.networkService;
  }

 /*  ngOnDestroy(): void {}

  ngOnInit(): void {} */

  backClicked(): void {
    this._location.back();
  }
}

import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

import { User } from '../user-management.model';
import { MaterialModule } from 'app/material.module';

@Component({
  standalone: true,
  selector: 'jhi-user-mgmt-detail',
  templateUrl: './user-management-detail.component.html',
  imports: [RouterModule, SharedModule, MaterialModule],
})
export default class UserManagementDetailComponent {
  user = input<User | null>(null);
}

import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import SiteAdminDashboardComponent from './dashboard/dashboard.component';

import { AddUsersComponent } from './add-users/add-users.component';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./home/home.component'),
    title: 'global.menu.admin.apidocs',
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: 'dashboard',
        component: SiteAdminDashboardComponent,
        data: { pageTitle: 'home.title' },
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.route'),
        title: 'userManagement.home.title',
      },
      {
        path: 'district-management',
        loadChildren: () => import('./districts-management/districts-management.route'),
        title: 'districtManagement.home.title',
      },
  
      {
        path:'add-users',
        component: AddUsersComponent,
        data: { pageTitle: 'home.title' },
      }
    ]
  },


  /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
];

export default routes;

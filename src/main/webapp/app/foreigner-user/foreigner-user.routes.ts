import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import UserDashboardComponent from './dashboard/dashboard.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { ChooseNationalityComponent } from './choose-nationality/choose-nationality.component';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
import { PurposesComponent } from './purposes/purposes.component';
const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./home/home.component'),
    title: 'global.menu.admin.apidocs',
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent,
        data: { pageTitle: 'home.title' },
      },  
      {
        path: 'personal-details-form',
        component: PersonalDetailsFormComponent,
        data: { pageTitle: 'home.title' },
      }, 
      {
        path: 'choose-nationality',
        component: ChooseNationalityComponent,
        data: { pageTitle: 'home.title' },
      }, 
      {
        path: 'purposes',
        component: PurposesComponent,
        data: { pageTitle: 'home.title' },
      }, 

    ]
  },


 
];

export default routes;

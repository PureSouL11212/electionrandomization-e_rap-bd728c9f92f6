import { Routes } from '@angular/router';

const districtManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./districts-list/districts-list.component').then(m => m.DistrictsListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./districts-add/districts-add.component').then(m => m.DistrictsAddComponent),
    
  },
];

export default districtManagementRoute;

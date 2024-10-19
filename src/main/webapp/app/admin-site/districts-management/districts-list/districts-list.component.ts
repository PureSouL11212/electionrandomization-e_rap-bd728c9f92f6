import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { SortByDirective, SortDirective, SortService, SortState, sortStateSignal } from 'app/shared/sort';
import { ITEMS_PER_PAGE } from 'app/config/pagination.constants';
import { SORT } from 'app/config/navigation.constants';
import { ItemCountComponent } from 'app/shared/pagination';
import { AccountService } from 'app/core/auth/account.service';

import { MaterialModule } from 'app/material.module';

export interface District {
  District: string;
  DistrictCode: string;
  stateName: string;
 
}
@Component({
  selector: 'jhi-districts-list',
  standalone: true,
  imports: [RouterModule, SharedModule, SortDirective, SortByDirective, ItemCountComponent, MaterialModule],
  templateUrl: './districts-list.component.html',
  styleUrl: './districts-list.component.scss'
})
export class DistrictsListComponent {
  currentAccount = inject(AccountService).trackCurrentAccount();
 
  isLoading = signal(false);
  totalItems = signal(0);
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  sortState = sortStateSignal({});
 
 
  displayedColumns: string[] = ['districtName', 'districtCode', 'stateName', 'actions'];

  districts = [
    { District: 'Gangtok', DistrictCode: '225', stateName: 'Sikkim' },
    { District: 'Gyalshing', DistrictCode: '228', stateName: 'Sikkim' }
  ];
 
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private sortService = inject(SortService);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    // Fetch the initial data for districts or other initialization logic here
    this.loadDistricts();
    
    // eslint-disable-next-line no-console
    console.log('table data loaded');
  }
  
  loadDistricts(): void {
    // If this data comes from an API, load it here.
    // For now, you are using static data in `districts` array.
    this.isLoading.set(true);
    
    // Simulate API call or data load
    setTimeout(() => {
      // Set districts data or fetch data from service
      this.isLoading.set(false);
      this.totalItems.set(this.districts.length);
    }, 1000); // Simulated delay

  }
  onToggleChange(event: any, element: any): void {
    if (!event.checked) {
      // eslint-disable-next-line no-console
      console.log('turned off');
    } else {
      // eslint-disable-next-line no-console
      console.log('turned on');
    }
  }
 
}

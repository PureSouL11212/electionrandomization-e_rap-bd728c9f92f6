import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'app/material.module';

@Component({
  selector: 'jhi-districts-add',
  standalone: true,
  imports: [ MaterialModule],
  templateUrl: './districts-add.component.html',
  styleUrl: './districts-add.component.scss'
})
export class DistrictsAddComponent {
  district: any = {
    districtname: '',
    districtnamell: '',
    districtcode: '',
    state: ''
  };

  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log('My message'); 
  }

  
  onSave(): void {
    // eslint-disable-next-line no-console
    console.log('District saved:', this.district);
  }
  
}

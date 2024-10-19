import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule,],
  
  providers: [],
})
export class SiteAdminModule { }
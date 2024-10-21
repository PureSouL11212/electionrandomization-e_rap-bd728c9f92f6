import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { RapApplicantDetails} from '../../models/rap-application.models';
import { PurposesComponent } from '../purposes/purposes.component';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router  } from '@angular/router';

@Component({
  selector: 'jhi-personal-details-form',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    PurposesComponent,RouterOutlet,RouterLink
    
  ],
  providers: [provideNativeDateAdapter(),Router],
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss']
})

export class PersonalDetailsFormComponent {
  
  rapapplicantdetails: RapApplicantDetails = new RapApplicantDetails();
  // Declare all properties before methods
  Accomodationdetails = ['hotelDetails', 'localReference'];
  selectVal = ''; // No type annotation
  showBlackForm = false; // Changed to showHotelDetailsForm
  showRedForm = false; // Changed to showLocalReferenceForm
  isLinear = false; // Assuming you have this property
  
  // Method to handle the selection of a dog
  onDogSelect(selected: string): void {
    this.showBlackForm = selected === 'hotelDetails'; 
    this.showRedForm = selected === 'localReference'; 
  }
 copyResidentaladdress(): void {
    this.rapapplicantdetails.permanentAddress ={...this.rapapplicantdetails.residentialAddress}
  }

  copyPermanentaddress(): void {
    this.rapapplicantdetails.passportAddress = {...this.rapapplicantdetails.permanentAddress}
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.passPhoto = e.target.result; // Save the base64 string in passPhoto
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  }

  onMHAFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.rapapplicantsMHAclearance.mhaClearanceCertificate = e.target.result; // Store base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  }

  onMEAFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.rapapplicantsMEAclearance.meaClearanceCertificate = e.target.result; // Store base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  }

  onPassportFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.passportDetails.passportCopy = e.target.result; // Store base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  }

  onVisaFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.visaDetails.visaCopy= e.target.result; // Store base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  }
  onCitizenshipFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.rapapplicantdetails.citizenshipDetails.citizenshipCopy = e.target.result; // Store base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  }

  displayData(): void {
    // eslint-disable-next-line no-console
    console.log('Applicant Details:', this.rapapplicantdetails);
   
    
  }
 
 
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaterialModule } from 'app/material.module';

@Component({
  selector: 'jhi-add-users',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss'
})
export class AddUsersComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNo: '',
    district: '',
    role: '',
    department: ''
  };

  // Arrays for dropdown values
  districts = [
               {value: 1,label:'Gangtok'},
               {value: 2,label:'Pakyong'},
               {value: 3,label:'Namchi'}, 
               {value: 4,label:'Soreng'}, 
               {value: 5,label:'Gyalshing'}, 
               {value: 6,label:'Mangan'}, ];
  roles = [
    { value: 1, label: 'RAP issuing authority' },
    { value: 2, label: 'RAP verifying authority' }
  ];
  departments = [
               {value: 1,label:'FRO'},
               {value: 2,label:'Tourism Department'}
               ];



  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log('AddUser component initialized');
  }

  onSave(): void {
    if (this.isFormValid()) {
      // eslint-disable-next-line no-console
      console.log('User data saved:', this.user);
      alert('User data saved successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }

  isFormValid(): boolean {
    return (
      this.user.firstName.trim() !== '' &&
      this.user.lastName.trim() !== '' &&
      this.isEmailValid(this.user.emailId) &&
      this.isPhoneNoValid(this.user.phoneNo) &&
      this.user.district.trim() !== '' &&
      this.user.role.trim() !== '' &&
      this.user.department.trim() !== ''
    );
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  isPhoneNoValid(phoneNo: string): boolean {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNo);
  }

}

import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterOutlet,RouterLink } from '@angular/router';
import { PersonalDetailsFormComponent } from '../personal-details-form/personal-details-form.component';
@Component({
  selector: 'jhi-purposes',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,PersonalDetailsFormComponent],
  providers: [Router],
  templateUrl: './purposes.component.html',
  styleUrl: './purposes.component.scss'
})
export class PurposesComponent {

}

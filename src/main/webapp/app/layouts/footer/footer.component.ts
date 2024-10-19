import { Component } from '@angular/core';
import { MaterialModule } from 'app/material.module';
import { TranslateDirective } from 'app/shared/language';

@Component({
  standalone: true,
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.scss'],
  imports: [TranslateDirective, MaterialModule],
})
export default class FooterComponent {}

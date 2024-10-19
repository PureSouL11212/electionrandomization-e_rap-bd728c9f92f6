import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNationalityComponent } from './choose-nationality.component';

describe('ChooseNationalityComponent', () => {
  let component: ChooseNationalityComponent;
  let fixture: ComponentFixture<ChooseNationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNationalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsAddComponent } from './districts-add.component';

describe('DistrictsAddComponent', () => {
  let component: DistrictsAddComponent;
  let fixture: ComponentFixture<DistrictsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

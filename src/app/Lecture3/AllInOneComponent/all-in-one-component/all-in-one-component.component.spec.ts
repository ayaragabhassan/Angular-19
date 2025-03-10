import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneComponentComponent } from './all-in-one-component.component';

describe('AllInOneComponentComponent', () => {
  let component: AllInOneComponentComponent;
  let fixture: ComponentFixture<AllInOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllInOneComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

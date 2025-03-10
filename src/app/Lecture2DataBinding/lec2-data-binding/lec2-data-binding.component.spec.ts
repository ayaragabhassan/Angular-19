import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec2DataBindingComponent } from './lec2-data-binding.component';

describe('Lec2DataBindingComponent', () => {
  let component: Lec2DataBindingComponent;
  let fixture: ComponentFixture<Lec2DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lec2DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lec2DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

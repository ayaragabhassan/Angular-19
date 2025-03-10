import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1CoreComponent } from './child1-core.component';

describe('Child1CoreComponent', () => {
  let component: Child1CoreComponent;
  let fixture: ComponentFixture<Child1CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child1CoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

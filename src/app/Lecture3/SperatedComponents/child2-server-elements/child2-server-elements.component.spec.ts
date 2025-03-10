import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ServerElementsComponent } from './child2-server-elements.component';

describe('Child2ServerElementsComponent', () => {
  let component: Child2ServerElementsComponent;
  let fixture: ComponentFixture<Child2ServerElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2ServerElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2ServerElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

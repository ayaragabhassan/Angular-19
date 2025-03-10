import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompAppComponent } from './parent-comp-app.component';

describe('ParentCompAppComponent', () => {
  let component: ParentCompAppComponent;
  let fixture: ComponentFixture<ParentCompAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentCompAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCompAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

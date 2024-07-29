import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseListComponent } from './use-list.component';

describe('UseListComponent', () => {
  let component: UseListComponent;
  let fixture: ComponentFixture<UseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseListComponent]
    });
    fixture = TestBed.createComponent(UseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsDetailComponent } from './rooms.detail.component';

describe('RoomsDetailComponent', () => {
  let component: RoomsDetailComponent;
  let fixture: ComponentFixture<RoomsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsDetailComponent]
    });
    fixture = TestBed.createComponent(RoomsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

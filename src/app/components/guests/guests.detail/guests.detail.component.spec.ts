import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsDetailComponent } from './guests.detail.component';

describe('GuestsDetailComponent', () => {
  let component: GuestsDetailComponent;
  let fixture: ComponentFixture<GuestsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsDetailComponent]
    });
    fixture = TestBed.createComponent(GuestsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

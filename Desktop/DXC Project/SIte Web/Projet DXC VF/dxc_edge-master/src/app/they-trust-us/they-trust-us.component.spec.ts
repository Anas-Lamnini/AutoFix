import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheyTrustUsComponent } from './they-trust-us.component';

describe('TheyTrustUsComponent', () => {
  let component: TheyTrustUsComponent;
  let fixture: ComponentFixture<TheyTrustUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheyTrustUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheyTrustUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

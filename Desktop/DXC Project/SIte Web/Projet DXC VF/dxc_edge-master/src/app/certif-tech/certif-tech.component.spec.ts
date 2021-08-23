import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifTechComponent } from './certif-tech.component';

describe('CertifTechComponent', () => {
  let component: CertifTechComponent;
  let fixture: ComponentFixture<CertifTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

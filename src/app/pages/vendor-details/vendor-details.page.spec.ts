import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendorDetailsPage } from './vendor-details.page';

describe('VendorDetailsPage', () => {
  let component: VendorDetailsPage;
  let fixture: ComponentFixture<VendorDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

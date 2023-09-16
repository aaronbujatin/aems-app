import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageVendorsPage } from './manage-vendors.page';

describe('ManageVendorsPage', () => {
  let component: ManageVendorsPage;
  let fixture: ComponentFixture<ManageVendorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageVendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

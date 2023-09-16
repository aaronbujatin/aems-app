import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeddingDetailsPage } from './wedding-details.page';

describe('WeddingDetailsPage', () => {
  let component: WeddingDetailsPage;
  let fixture: ComponentFixture<WeddingDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeddingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

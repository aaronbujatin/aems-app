import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewPagePage } from './pdf-view-page.page';

describe('PdfViewPagePage', () => {
  let component: PdfViewPagePage;
  let fixture: ComponentFixture<PdfViewPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PdfViewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

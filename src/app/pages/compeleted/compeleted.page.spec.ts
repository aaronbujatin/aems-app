import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompeletedPage } from './compeleted.page';

describe('CompeletedPage', () => {
  let component: CompeletedPage;
  let fixture: ComponentFixture<CompeletedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompeletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

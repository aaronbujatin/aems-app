import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToBeProcessedPage } from './to-be-processed.page';

describe('ToBeProcessedPage', () => {
  let component: ToBeProcessedPage;
  let fixture: ComponentFixture<ToBeProcessedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToBeProcessedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

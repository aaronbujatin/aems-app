import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LovelyPage } from './lovely.page';

describe('LovelyPage', () => {
  let component: LovelyPage;
  let fixture: ComponentFixture<LovelyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LovelyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

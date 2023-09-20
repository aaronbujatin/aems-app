import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatererPage } from './caterer.page';

describe('CatererPage', () => {
  let component: CatererPage;
  let fixture: ComponentFixture<CatererPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

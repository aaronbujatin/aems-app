import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficiantPage } from './officiant.page';

describe('OfficiantPage', () => {
  let component: OfficiantPage;
  let fixture: ComponentFixture<OfficiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfficiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RgpdPage } from './rgpd.page';

describe('RgpdPage', () => {
  let component: RgpdPage;
  let fixture: ComponentFixture<RgpdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RgpdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

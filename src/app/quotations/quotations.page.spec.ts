import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationsPage } from './quotations.page';

describe('QuotationsPage', () => {
  let component: QuotationsPage;
  let fixture: ComponentFixture<QuotationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

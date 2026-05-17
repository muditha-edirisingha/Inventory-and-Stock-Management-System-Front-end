import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockViewComponent } from './low-stock-view.component';

describe('LowStockViewComponent', () => {
  let component: LowStockViewComponent;
  let fixture: ComponentFixture<LowStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowStockViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockRootComponent } from './low-stock-root.component';

describe('LowStockRootComponent', () => {
  let component: LowStockRootComponent;
  let fixture: ComponentFixture<LowStockRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowStockRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowStockRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

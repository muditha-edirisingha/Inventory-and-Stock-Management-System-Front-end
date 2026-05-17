import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryIdComponent } from './stock-history-id.component';

describe('StockHistoryIdComponent', () => {
  let component: StockHistoryIdComponent;
  let fixture: ComponentFixture<StockHistoryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockHistoryIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockHistoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

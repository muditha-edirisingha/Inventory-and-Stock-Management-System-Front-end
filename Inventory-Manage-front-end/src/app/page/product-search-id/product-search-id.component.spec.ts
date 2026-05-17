import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchIdComponent } from './product-search-id.component';

describe('ProductSearchIdComponent', () => {
  let component: ProductSearchIdComponent;
  let fixture: ComponentFixture<ProductSearchIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

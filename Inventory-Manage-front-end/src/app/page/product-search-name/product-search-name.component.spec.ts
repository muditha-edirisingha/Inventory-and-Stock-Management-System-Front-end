import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchNameComponent } from './product-search-name.component';

describe('ProductSearchNameComponent', () => {
  let component: ProductSearchNameComponent;
  let fixture: ComponentFixture<ProductSearchNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

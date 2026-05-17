import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierByNameComponent } from './supplier-by-name.component';

describe('SupplierByNameComponent', () => {
  let component: SupplierByNameComponent;
  let fixture: ComponentFixture<SupplierByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

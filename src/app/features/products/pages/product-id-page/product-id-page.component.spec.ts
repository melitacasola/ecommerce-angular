import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIdPageComponent } from './product-id-page.component';

describe('ProductIdPageComponent', () => {
  let component: ProductIdPageComponent;
  let fixture: ComponentFixture<ProductIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductIdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

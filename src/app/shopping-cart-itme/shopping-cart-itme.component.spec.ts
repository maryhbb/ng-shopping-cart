import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItmeComponent } from './shopping-cart-itme.component';

describe('ShoppingCartItmeComponent', () => {
  let component: ShoppingCartItmeComponent;
  let fixture: ComponentFixture<ShoppingCartItmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartItmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

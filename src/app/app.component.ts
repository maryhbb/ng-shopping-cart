import {Component, OnInit} from '@angular/core';
import {ShoppingCartItemModel} from "./shared/models/shopping-cart-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  items: ShoppingCartItemModel [] = []
  totalPrice: number = 0;

  onDeleteEvent($cartItemId: number) {
    const index = this.items.findIndex(item => item.id === $cartItemId);
    this.items.splice(index, 1);
  }

  onCountUpdatedEvent($event: ShoppingCartItemModel) {
    const index = this.items.findIndex(item => item.id === $event.id);
    this.items[index] = $event
  }

  refresh() {
    let sumPrice: number = 0;
    this.items.forEach(item => {
      sumPrice += (item.price ?? 0) * (item.count ?? 0);
    });
    this.totalPrice = sumPrice
  }

  ngOnInit(): void {
    this.initCart();
  }

  private initCart() {
    this.items = [
      {id: 1, count: 0, image: "assets/images/3_large.jpg", name: "iPhone 14 Pro", price: 1299},
      {id: 2, count: 0, image: "assets/images/2_large.jpg", name: "iPhone 14", price: 999},
      {id: 3, count: 0, image: "assets/images/1_large.jpg", name: "iPhone 13", price: 799},
      {id: 4, count: 0, image: "assets/images/4_large.jpg", name: "iPhone SE", price: 549},
    ]
    this.refresh()
  }
}

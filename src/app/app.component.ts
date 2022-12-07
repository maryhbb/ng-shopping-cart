import {Component} from '@angular/core';
import {ShoppingCartItemModel} from "./shared/models/shopping-cart-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  items: ShoppingCartItemModel [] = [
    {id: 1, count: 0, image: "assets/images/3_large.jpg", name: "iPhone 14 Pro"},
    {id: 2, count: 0, image: "assets/images/2_large.jpg", name: "iPhone 14"},
    {id: 3, count: 0, image: "assets/images/1_large.jpg", name: "iPhone 13"},
    {id: 4, count: 0, image: "assets/images/4_large.jpg", name: "iPhone SE"}
  ]

  onDeleteEvent($cartItemId: number) {
    const index = this.items.findIndex(item => item.id === $cartItemId);
    this.items.splice(index, 1);
  }
}

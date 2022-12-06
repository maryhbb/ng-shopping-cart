import {Component, Input} from '@angular/core';
import {ShoppingCartItemModel} from "../shared/models/shopping-cart-item.model";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
@Input() item :ShoppingCartItemModel = {};
}

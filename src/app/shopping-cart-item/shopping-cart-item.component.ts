import {Component, Input} from '@angular/core';
import {ShoppingCartItemModel} from "../shared/models/shopping-cart-item.model";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
@Input() item :ShoppingCartItemModel = {};


 add(){
const currentCount :number = this.item.count ?? 0;
this.item.count = currentCount +1;
  }
 sub (){
const currentCount :number = this.item.count ?? 0;
this.item.count = currentCount > 0 ? (currentCount -1 ):0;
 }
}

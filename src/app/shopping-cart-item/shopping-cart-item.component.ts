import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingCartItemModel} from "../shared/models/shopping-cart-item.model";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
@Input() item :ShoppingCartItemModel = {};
@Output() onDelete= new EventEmitter<number>();


 add(){
const currentCount :number = this.item.count ?? 0;
this.item.count = currentCount +1;
  }
 sub (){
const currentCount :number = this.item.count ?? 0;
this.item.count = currentCount > 0 ? (currentCount -1 ):0;
 }

 del(itemId?: number){
this.onDelete.emit(itemId)
 }
}

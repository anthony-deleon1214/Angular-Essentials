import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() items = [];
  newItem = '';
  @Output() addedItem = new EventEmitter<string>();

  onAddItem() {
    this.addedItem.emit(this.newItem)
  }
}

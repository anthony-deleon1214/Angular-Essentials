import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() items = [];
  @Output() addItem = new EventEmitter<string>();

  onClick(event) {
    this.addItem.emit(event.target.value)
  }
}

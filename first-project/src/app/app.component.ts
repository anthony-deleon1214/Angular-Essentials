import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  rootName = 'Anthony';
  itemList = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName
  }

  onAddItem(newItem) {
    this.itemList.push(newItem)
  }
}

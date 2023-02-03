import { Component } from "@angular/core";

@Component({
  selector: 'dashboard',
  template: `
    <input type="text" [(ngModel)]="loadState">
    <p>Loading something</p>
    <button type="button" (click)="onClick()">{{ loadState }}</button>
  `
})
export class DashboardComponent {
  loadState = 'Loading...';

  onClick() {
    this.loadState = "Finished"
  }
}

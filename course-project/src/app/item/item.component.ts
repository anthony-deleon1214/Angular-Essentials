import { Component, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() character;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side) {
    this.swService.onSideChosen({ name: this.character.name, side: side })
  };
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrl: './card-simple.component.scss'
})
export class CardSimpleComponent {
  @Input() titleCard!: string;
  @Input() contentCard!: string;
}

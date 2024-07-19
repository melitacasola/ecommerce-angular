import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.scss'
})
export class CardPrincipalComponent {
  @Input() cardImage!: string;
  @Input() cardTitle!: string;
  @Input() cardSubtitle!: string;
  @Input() cardDescription!: string;
  @Input() price!: number;
  @Input() classCard!: string;
  @Input() textButton!: string;

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClicked.emit();
  }
}

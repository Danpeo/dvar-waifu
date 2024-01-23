import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input({required: true}) title: string = '';
  @Input() expanded: boolean = true;

  toggleItem() {
    this.expanded = !this.expanded;
  }
}

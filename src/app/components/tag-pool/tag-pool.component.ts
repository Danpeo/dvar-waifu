import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tag} from "./tag";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-tag-pool',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './tag-pool.component.html',
  styleUrl: './tag-pool.component.css'
})
export class TagPoolComponent {

  @Input({required: true}) selectedTags: Tag[] = [];
  @Input({required: true}) onlySfw: boolean = true;
  @Output() tagEventEmitter = new EventEmitter<Tag[]>;
  @Output() onlySfwEventEmitter = new EventEmitter<boolean>();

  excludedTags: Tag[] = [];

  constructor() {

  }

  removeTags(tagIndex: number, from: Tag[], to: Tag[]) {
    to.push(this.selectedTags[tagIndex]);
    from[tagIndex].isSelected = false;
    from.splice(tagIndex, 1)
    this.tagEventEmitter.emit(from);
  }
}

import {Component} from '@angular/core';
import {Waifu_WaifuPics} from "../../models/waifu_waifu_pics";
import {WaifuService} from "../../services/waifu.service";
import {
  SavedPicsLocStorageKey,
  getTagMapKeyByValue,
  tagMap, SavedPics
} from "../../../environments/environment.development";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {TagPoolComponent} from "../../components/tag-pool/tag-pool.component";
import {Tag} from "../../components/tag-pool/tag";
import {LoadingComponent} from "../../components/loading/loading.component";
import {AccordionItemComponent} from "../../components/accordion-item/accordion-item.component";
import {LocalStorageService} from "../../services/local-storage.service";
import {WaifuBase} from "../../models/waifu-base";
import {SavedPic} from "../../models/saved-pic";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TagPoolComponent,
    NgIf,
    LoadingComponent,
    AccordionItemComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tags: Tag[] = [];
  isPreview: boolean = true;
  onlySfw: boolean = true;
  waifu_waifuPics: Waifu_WaifuPics | null = null;

  constructor(private readonly waifuService: WaifuService, private readonly localStorageService: LocalStorageService) {

    this.getTags();

    this.getWaifu();
  }

  getWaifu(): void {
    this.waifu_waifuPics = null;

    this.waifuService.getRandom_WaifuPics(this.randomTag()).subscribe({
      next: (waifu) => {
        this.waifu_waifuPics = null;
        this.waifu_waifuPics = waifu;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private randomTag(): string {

    let tm = new Map<string, Tag>();

    for (let tag of this.tags) {
      if (tag.isSelected) {
        tm.set(getTagMapKeyByValue(tagMap, tag.value), tag);
      }
    }

    let filteredWaifuMap = new Map([...tm]
      .filter(([k, v]) => v.isSelected && v.nsfw !== this.onlySfw));

    let keys = Array.from(filteredWaifuMap.keys());

    return keys[Math.floor(Math.random() * keys.length)];
  }

  toggleIsPreview(): void {
    this.isPreview = !this.isPreview;
  }

  toggleSfw() {
    this.onlySfw = !this.onlySfw;
  }

  addToSaved(waifu: null | Waifu_WaifuPics): void {
    let saved = new SavedPic(waifu?.url);
    SavedPics.push(saved)
    this.localStorageService.saveToLocalStorage(SavedPicsLocStorageKey, SavedPics);
  }

  removeFromSaved(waifu: null | Waifu_WaifuPics): void {
    let saved = SavedPics.find(s => s.url === waifu?.url);
    if (saved instanceof SavedPic) {
      SavedPics.splice(SavedPics.indexOf(saved), 1);
    }
  }

  ifInSaved(waifu_waifuPics: null | Waifu_WaifuPics) {
    return SavedPics.find(savedPic => savedPic.url === waifu_waifuPics?.url);
  }

  private getTags(): void {
    this.tags = Array.from(tagMap.values()).map(tag => new Tag(tag.value, tag.nsfw, tag.isSelected));
    console.log(this.tags);
  }
}

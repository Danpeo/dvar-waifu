import { Component } from '@angular/core';
import {LoadingComponent} from "../../components/loading/loading.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SavedPics} from "../../../environments/environment.development";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-saved-pics',
  standalone: true,
  imports: [
    LoadingComponent,
    NgIf,
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './saved-pics.component.html',
  styleUrl: './saved-pics.component.css'
})
export class SavedPicsComponent {
  protected readonly SavedPics = SavedPics;
}

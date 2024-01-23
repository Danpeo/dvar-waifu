import {WaifuBase} from "./waifu-base";
import {SavedPics} from "../../environments/environment.development";

export class SavedPic extends WaifuBase {
  constructor(url: string = '') {

    if (SavedPics.some(p => p.url === url)) {
      return;
    }

    super(url);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WaifuApi, WaifuType} from "../../environments/environment.development";
import {Waifu_WaifuPics} from "../models/waifu_waifu_pics";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaifuService {

  constructor(private readonly httpClient: HttpClient) { }


  getRandom_WaifuPics(waifuType: string): Observable<Waifu_WaifuPics> {
    const url = `${WaifuApi.WaifuPicsApi}/${waifuType}`;

    return this.httpClient.get<Waifu_WaifuPics>(url);
  }
}

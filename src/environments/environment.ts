import {Tag} from "../app/components/tag-pool/tag";
import {SavedPic} from "../app/models/saved-pic";

export const environment = {
  isProduction: true,
};


export const SavedPicsLocStorageKey: string = 'favoritePics';

// @ts-ignore
export let SavedPics: SavedPic[] = JSON.parse(localStorage.getItem(SavedPicsLocStorageKey));

export enum WaifuType {
  NsfwWaifu = "nsfw/waifu",
  NsfwNeko = "nsfw/neko",
  NsfwTrap = "nsfw/trap",
  NsfwBlowjob = "nsfw/blowjob",
  SfwWaifu = "sfw/waifu",
  SfwNeko = "sfw/neko",
  SfwShinobu = "sfw/shinobu",
  SfwMegumin = "sfw/megumin",
  SfwBully = "sfw/bully",
  SfwCuddle = "sfw/cuddle",
  SfwCry = "sfw/cry",
  SfwHug = "sfw/hug",
  SfwAwoo = "sfw/awoo",
  SfwKiss = "sfw/kiss",
  SfwLick = "sfw/lick",
  SfwPat = "sfw/pat",
  SfwSmug = "sfw/smug",
  SfwBonk = "sfw/bonk",
  SfwYeet = "sfw/yeet",
  SfwBlush = "sfw/blush",
  SfwSmile = "sfw/smile",
  SfwWave = "sfw/wave",
  SfwHighfive = "sfw/highfive",
  SfwHandhold = "sfw/handhold",
  SfwNom = "sfw/nom",
  SfwBite = "sfw/bite",
  SfwGlomp = "sfw/glomp",
  SfwSlap = "sfw/slap",
  SfwKill = "sfw/kill",
  SfwKick = "sfw/kick",
  SfwHappy = "sfw/happy",
  SfwWink = "sfw/wink",
  SfwPoke = "sfw/poke",
  SfwDance = "sfw/dance",
  SfwCringe = "sfw/cringe"
}

export const tagMap = new Map<string, Tag>([
  [WaifuType.SfwWaifu, new Tag('Waifu', false, true)],
  [WaifuType.NsfwWaifu, new Tag('Waifu ( ͡~ ͜ʖ ͡° )', true, true)],
  [WaifuType.SfwNeko, new Tag('Neko', false, true)],
  [WaifuType.NsfwNeko, new Tag('Neko ≽^•⩊•^≼', true, true)],
  [WaifuType.NsfwTrap, new Tag('Trap', true, true)],
  [WaifuType.NsfwBlowjob, new Tag('Blowjob', true, true)],
  [WaifuType.SfwShinobu, new Tag('Shinobu', false, true)],
  [WaifuType.SfwMegumin, new Tag('Megumin', false, true)],
  [WaifuType.SfwBully, new Tag('Bully', false, true)],
  [WaifuType.SfwCuddle, new Tag('Cuddle', false, true)],
  [WaifuType.SfwCry, new Tag('Cry (˚ ˃̣̣̥⌓˂̣̣̥ )', false, true)],
  [WaifuType.SfwHug, new Tag('Hug', false, true)],
  [WaifuType.SfwAwoo, new Tag('Awoo', false, true)],
  [WaifuType.SfwKiss, new Tag('Kiss', false, true)],
  [WaifuType.SfwLick, new Tag('Lick', false, true)],
  [WaifuType.SfwPat, new Tag('Pat', false, true)],
  [WaifuType.SfwSmug, new Tag('Smug', false, true)],
  [WaifuType.SfwBonk, new Tag('Bonk', false, true)],
  [WaifuType.SfwYeet, new Tag('Yeet', false, true)],
  [WaifuType.SfwBlush, new Tag('Blush', false, true)],
  [WaifuType.SfwSmile, new Tag('Smile', false, true)],
  [WaifuType.SfwWave, new Tag('Wave', false, true)],
  [WaifuType.SfwHighfive, new Tag('High 5', false, true)],
  [WaifuType.SfwHandhold, new Tag('Hand Hold', false, true)],
  [WaifuType.SfwNom, new Tag('Nom', false, true)],
  [WaifuType.SfwBite, new Tag('Bite', false, true)],
  [WaifuType.SfwGlomp, new Tag('Glomp', false, true)],
  [WaifuType.SfwSlap, new Tag('Slap', false, true)],
  [WaifuType.SfwKill, new Tag('Kill', false, true)],
  [WaifuType.SfwKick, new Tag('Kick', false, true)],
  [WaifuType.SfwHappy, new Tag('Happy', false, true)],
  [WaifuType.SfwWink, new Tag('Wink', false, true)],
  [WaifuType.SfwPoke, new Tag('Poke', false, true)],
  [WaifuType.SfwDance, new Tag('Dance', false, true)],
  [WaifuType.SfwCringe, new Tag('Cringe', false, true)],

]);

export function getTagMapKeyByValue(map: Map<string, Tag>, searchValue: string): string {
  for (let [key, value] of map.entries()) {
    if (value.value === searchValue)
      return key;
  }

  return "";
}

export enum WaifuApi {
  WaifuPicsApi = "https://api.waifu.pics",

}

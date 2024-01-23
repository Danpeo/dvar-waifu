export class Tag {
  value: string = '';
  nsfw: boolean = false;
  isSelected: boolean = true;

  constructor(value: string = '', nsfw: boolean = false, isSelected: boolean = true) {
    this.value = value;
    this.nsfw = nsfw;
    this.isSelected = isSelected;
  }
}

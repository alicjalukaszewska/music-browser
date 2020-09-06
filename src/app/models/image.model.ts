export class Image {
  url: string;

  constructor(obj?: any) {
    this.url = obj && obj.url || null;
  }
}

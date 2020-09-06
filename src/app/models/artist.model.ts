export class Artist {
  name: string;
  id: string;
  href: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.id = obj && obj.id || null;
    this.href = obj && obj.href || null;
  }
}

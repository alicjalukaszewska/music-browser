import { Image } from './image.model';

export class Album {
  name: string;
  id: string;
  href: string;
  images: Image[];


  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.id = obj && obj.id || null;
    this.href = obj && obj.href || null;
    this.images = obj && obj.images || null;
  }
}

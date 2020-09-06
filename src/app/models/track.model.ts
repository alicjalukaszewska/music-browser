import { Artist } from './artist.model';
import { Album } from './album.model';

export class Track {
  artists: Array<Artist>;
  name: string;
  id: string;
  album: Album;

  constructor(obj?: any) {
    this.artists = obj && obj.artists ? obj.artists : null;
    this.name = obj && obj.name || null;
    this.id = obj && obj.id || null;
    this.album = obj && obj.album || null;
  }
}

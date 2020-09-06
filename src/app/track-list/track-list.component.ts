import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { tap, map, skipWhile } from 'rxjs/operators';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  nextPageUrl: string;
  tracks: Track[];

  constructor(private service: SpotifyService) { }

  ngOnInit() {
    this.service.searchResultData
    .pipe(
      skipWhile(res => !res || res && !res.tracks),
      tap(res => this.nextPageUrl = res.tracks ? res.tracks.next : ''),
      map(res => res.tracks.items),
      map(res => res.map(track => new Track(track)))
    ).subscribe(res => {
      this.tracks = res;
      console.log('tracks', this.tracks, this.nextPageUrl);
    });
  }

}

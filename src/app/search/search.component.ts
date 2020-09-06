import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  submit(query: string = '') {
    this.spotifyService.searchTracks(query).subscribe(res => {
      console.log('Track:', res);
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from './models/track.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyApiUrl: string;

  private searchResult$: BehaviorSubject<any> = new BehaviorSubject([]);


  constructor(private http: HttpClient) {
    this.spotifyApiUrl = environment.spotifyApiUrl;
  }

  get searchResultData() {
    return this.searchResult$.asObservable();
  }

  query(URL: string, params): Observable<any> {
    const queryURL = `${this.spotifyApiUrl}${URL}`;
    const apiKey = environment.spotifyApiKey;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });

    return this.http.get(queryURL, {
      params,
      headers
    });
  }

  searchTracks(query: string = '', limit = 30, offset = 0): Observable<Track[]> {
    const params = {
      q: query,
      type: 'track',
      limit,
      offset
    };
    return this.query('/search', params).pipe(
      tap(res => this.searchResult$.next(res)));
  }
}

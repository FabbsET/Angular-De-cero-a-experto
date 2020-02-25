import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) {
    console.log('Spotify Service Listo');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA1pXaLV5ova63dAH3HAHeqtdqArxPCrfFqIAM4Taxe9GflhE1fbme3-1BDhnCx_hrsgktoScIgrHUilVw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        // tslint:disable-next-line: no-string-literal
        return data['albums'].items;
      }));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        // tslint:disable-next-line: no-string-literal
        return data['artists'].items;
      }));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data => {
      // tslint:disable-next-line: no-string-literal
      return data['tracks'];
    }));
  }
}

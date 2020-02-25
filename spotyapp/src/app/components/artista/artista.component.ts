import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {
    this.loadingArtist = true;
    this.router.params.subscribe(param => {
      // tslint:disable-next-line: no-string-literal
      this.getArtista(param['id']);
      // tslint:disable-next-line: no-string-literal
      this.getTopTracks(param['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtista(id).subscribe(artista => {
      // console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      // console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}

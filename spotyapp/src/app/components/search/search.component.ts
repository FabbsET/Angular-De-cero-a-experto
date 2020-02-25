import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  mensajeError: string;
  loading: boolean;
  error: boolean;

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  buscar(termino: string) {
    this.loading = true;
    this.error = false;
    // console.log(termino);
    this.spotifyService.getArtistas(termino)
      .subscribe((data: any) => {
        // console.log(data);
        this.artistas = data;
        // console.log(this.artistas);
        this.loading = false;
      },
        (errorServicio) => {
          this.loading = false;
          this.error = true;
          // console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
        });
  }

}

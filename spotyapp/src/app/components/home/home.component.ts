import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  mensajeError: string;
  loading: boolean;
  error: boolean;

  constructor(
    private spotifyService: SpotifyService
  ) {

    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      // console.log(data);
      this.nuevasCanciones = data;
      // console.log(this.nuevasCanciones);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  term: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.term = data['termino'];
      this.heroes = this.heroesService.buscarHeroes(data['termino']);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}

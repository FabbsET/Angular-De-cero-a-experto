import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeSelect: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // console.log( this.indice );
    this.router.navigate(['/heroe', this.indice]);
    // this.heroeSelect.emit(this.indice);
  }

}

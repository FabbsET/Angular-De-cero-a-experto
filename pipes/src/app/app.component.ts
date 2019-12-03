import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  nombre = 'Fabiola';
  nombre2 = 'faBIola esquIVel teLLez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Pi = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Clark Kent',
    clave: 'Superman',
    edad: '30',
    direccion: {
      calle: 'Kripton',
      casa: 'Hielo'
    }
  };

  // tslint:disable-next-line: no-shadowed-variable
  valorDePromesa = new Promise(( resolve, reject ) => {
    setTimeout( () => resolve('Llego la data'), 3500);
  });

  fecha = new Date();
  video = 'Ahha3Cqe_fk';
  activar = true;
}

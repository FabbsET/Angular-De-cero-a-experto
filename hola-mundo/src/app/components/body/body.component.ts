import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  card: any = {
    mensaje: 'Esto es de las cosas mas básicas que se veran en el curso de Angular 8+.',
    titulo: 'Angular de Cero a Experto'
  };

  mostrar: true;

  personajes: string[] = ['Superman', 'Mujer Maravilla', 'Acuaman', 'Flash'];
}

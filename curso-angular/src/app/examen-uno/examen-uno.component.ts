import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-examen-uno',
    templateUrl: './examen-uno.component.html'
})

export class ExamenUnoComponent implements OnInit {

    title = 'Curso Angular 8+';
    res: any;

    constructor() { }

    ngOnInit() {
        // Uso de Let y Const
        let nombre = 'Ricardo Tapia';
        let edad = 23;

        const PERSONAJE: { nombre: string, edad: number } = {
            nombre: nombre,
            edad: edad
        };

        console.log(PERSONAJE);


        // Cree una interfaz que sirva para validar el siguiente objeto
        interface Batman {
            nombre: string;
            artesMarciales: string[];
        }

        const batman: Batman = {
            nombre: 'Bruno Díaz',
            artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
        };

        console.log(batman);


        // Convertir esta funcion a una funcion de flecha
        function resultadoDoble(a, b) {
            return (a + b) * 2;
        }

        const resultado = (a: number, b: number) => {
            this.res = (a + b) * 2;
        };


        // Función con parametros obligatorios, opcionales y por defecto
        // donde NOMBRE = obligatorio
        //       PODER  = opcional
        //       ARMA   = por defecto = "arco"

        // tslint:disable-next-line: no-shadowed-variable
        function getAvenger(nombre: string, poder?: string, arma: string = 'arco') {
            let mensaje: string;
            if (poder) {
                // mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
                mensaje = `${nombre} tiene el poder de: ${poder} y un arma ${arma}`;
            } else {
                // mensaje = nombre + ' tiene un ' + poder;
                mensaje = `${nombre} tiene un ${poder}`;
            }
        }


        // Cree una clase que permita manejar la siguiente estructura
        // La clase se debe de llamar rectangulo,
        // debe de tener dos propiedades:
        //   * base
        //   * altura
        // También un método que calcule el área  =  base * altura,
        // ese método debe de retornar un numero.
    }
}

class Rectangulo {
    base: number;
    altura: number;

    calcularArea() {
        return this.base * this.altura;
    }
}



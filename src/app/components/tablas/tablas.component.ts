import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personas } from './personas';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent {
  @Input('personal') personas: personas[] = [
    {
      id: 0,
      nombre: 'prueba1',
      edad: 20,
    },
    {
      id: 1,
      nombre: 'prueba2',
      edad: 30,
    },
    {
      id: 2,
      nombre: 'prueba3',
      edad: 40,
    },
    {
      id: 3,
      nombre: 'prueba4',
      edad: 50,
    },
  ];

  @Output('edad') ValorSalida: EventEmitter<any> = new EventEmitter();

  minEdad(id: number) {
    this.personas[id].edad--;
  }

  maxEdad(id: number) {
    this.personas[id].edad++;
  }

  select(persona:any, id: number){   

    console.log(this.personas[id])

    this.ValorSalida.emit(this.personas[id])
  }
}

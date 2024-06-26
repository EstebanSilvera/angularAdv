import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 50;

  @Input() btnClass: string = 'btn btn-info';

  @Output() ValorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.ValorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.ValorSalida.emit(0);

      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.ValorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    
    console.log(valor);

    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.ValorSalida.emit(this.progreso);
  }
}

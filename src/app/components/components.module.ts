import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { TablasComponent } from './tablas/tablas.component';

@NgModule({
  declarations: [IncrementadorComponent, TablasComponent],
  exports: [IncrementadorComponent, TablasComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}

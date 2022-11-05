import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  hrs: string[] = ['Aluminio', 'Hierro', 'Cobre', 'Niquel'];
  borrado: string = '';

  borrarHr(): void {
    this.borrado = this.hrs.pop() || '';
  }


}

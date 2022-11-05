import { Component } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: 'hr.component.html'
})

export class HrComponent{
  nombre  : string = 'Hierro';
  cantidad: number = 44;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.cantidad}`
  }

  cambiarNombre(): void {
    this.nombre = 'Aluminio';
  }

  cambiarCantidad(): void{
    this.cantidad = 30;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent {
  public alumnos: string[] = [
    "Carlos",
    "Ximena",
    "Alberto",
    "Eduardo",
    "Baraba",
    "Georgina",
    "Kevin",
  ];

  agregarAlumno() {
    this.alumnos.push("Nuevo Alumno");
  }
}
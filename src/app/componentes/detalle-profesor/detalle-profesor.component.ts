import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {

  @Input() unProfesor:Profesor;
  @Output() profesorSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { 
    //this.unProfesor = new Profesor("Perez","Matematica",888);
  }

  ngOnInit() {
  }

  borrarProfesor(profesorABorrar:Profesor){
    this.profesorSeleccionado.emit(profesorABorrar);
    this.unProfesor = null;
  }

}

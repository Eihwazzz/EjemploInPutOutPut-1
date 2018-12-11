import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  @Output() seCreoUnProfesor: EventEmitter<any>= new EventEmitter<any>();

  nuevoProfesor:Profesor;

  constructor() { 
    //this.nuevoProfesor = new Profesor("Fonte","Analisis",666);
  }

  ngOnInit() {
  }

  profesorNuevo(){
    console.info("nuevoProfesor");
    let legajo:number =Math.floor((Math.random() * 1000) + 1);
    this.nuevoProfesor= new Profesor("Perez","Jose",legajo);
  }

  crearProfesor(){
    //this.nuevoProfesor = new Profesor("Fonte","Analisis",666);
    this.seCreoUnProfesor.emit(this.nuevoProfesor);
    this.nuevoProfesor=null;
  }
}

import { Component } from '@angular/core';
import { Alumno } from '../app/clases/alumno';
import { Profesor } from '../app/clases/profesor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo  @Input()  @Output()  ';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar:Profesor;
  listadoProfesoresPrincipal:Profesor[];

  constructor() { 
        //this.profesorParaMostrar = new Profesor("Newton","Fisica",777);
        this.listadoProfesoresPrincipal = [];
        this.listadoPrincipal = [
          { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
          { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
        ];
    }
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoPrincipal.push(NuevoAlumno);   
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;   
  }
  mostrarProfesor(parametroProfesor:Profesor){
    console.info("Profesor:",parametroProfesor);
    //this.profesorParaMostrar = parametroProfesor;
    this.listadoProfesoresPrincipal.push(parametroProfesor);
  }
  tomarProfesorParaDetalles(NuevoProfesor: Profesor){
    this.profesorParaMostrar=NuevoProfesor;   
  }
  borrarProfesor(profesorABorrar:Profesor){
    //this.listadoProfesoresPrincipal.find(x => x.legajo === profesorABorrar.legajo);
    console.info("Profesor a borrar",profesorABorrar);
  }
}

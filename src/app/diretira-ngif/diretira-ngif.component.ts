import { Component } from '@angular/core';

@Component({
  selector: 'app-diretira-ngif',
  templateUrl: './diretira-ngif.component.html',
  styleUrls: ['./diretira-ngif.component.css']
})
export class DiretiraNgifComponent {

  cursos: string[] = [];

  mostrarCursos: boolean = true;

  mostrarEsconderCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}

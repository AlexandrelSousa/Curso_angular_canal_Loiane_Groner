import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propertie.component.html',
  styleUrls: ['./input-propertie.component.css']
})
export class InputPropertieComponent {

  @Input('nome') nomeCurso: String = '';

}

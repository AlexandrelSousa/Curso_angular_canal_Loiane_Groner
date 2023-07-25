import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: String = 'http://lorempixel.com.br/400/200';

  valorAtual: String = '';
  valorSalvo:any = '';
  isMouseOver: boolean = false;

  nomeDoCurso: String = 'Angular';

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão clicado!');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor:any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  listaFotos;

  constructor(private servico: FotoService) {

    servico.listar().subscribe(
      fotosApi => {
        this.listaFotos = fotosApi;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
  }

  remover(foto: FotoComponent){
    console.log('foto');
    this.servico.deletar(foto).subscribe(() =>{
      console.log(`foto ${foto.titulo} apagada`);
    }, erro => console.log(erro));
  }

}

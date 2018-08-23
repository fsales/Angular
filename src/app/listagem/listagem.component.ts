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
  mensagem = '';

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

  remover(foto: FotoComponent) {
    console.log('foto');
    this.servico.deletar(foto).subscribe(() => {
      this.mensagem = `Foto ${foto.titulo} apagada com sucesso!`;

      this.listaFotos = this.listaFotos.filter(f => f._id !== foto._id);

      setTimeout(() => this.mensagem = '', 2000);
    }, erro => console.log(erro));
  }

}

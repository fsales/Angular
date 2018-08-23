import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();


  constructor(private servico: FotoService) {

    //this.foto.descricao = 'casa';
    // this.foto.url = 'casa';
    //this.foto.titulo = 'casa';
  }

  ngOnInit() {
  }

  salvar() {
    // event.preventDefault();
    //debugger;
    this.servico.salvar(this.foto).subscribe(() => {
      console.log(`Foto ${this.foto.titulo} Salva`);
      this.foto = new FotoComponent();
    },
      erro => {
        console.log(erro);
      });
  }

}

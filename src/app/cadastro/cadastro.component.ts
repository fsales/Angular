import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    //this.foto.descricao = 'casa';
    // this.foto.url = 'casa';
    //this.foto.titulo = 'casa';
  }

  ngOnInit() {
  }

  salvar(event: Event) {
    // event.preventDefault();
    // debugger;
    let cabecalho = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    this.http.post('http://localhost:3000/v1/fotos', this.foto, cabecalho).subscribe(() => {
      console.log(`Foto ${this.foto.titulo} Salva`);
      this.foto = new FotoComponent();
    },
      erro => {
        console.log(erro);
      });
  }

}

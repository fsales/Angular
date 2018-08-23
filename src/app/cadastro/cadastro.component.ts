import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();


  constructor(private servico: FotoService,
    private rota: ActivatedRoute) {

    //this.foto.descricao = 'casa';
    // this.foto.url = 'casa';
    //this.foto.titulo = 'casa';

    /* this.rota.params.subscribe(parametros => {
       console.log(parametros);
       if (parametros.idFoto) {
         this.servico.obterFoto(parametros.idFoto).
           subscribe(fotoDaApi => this.foto = fotoDaApi, error => console.log(error));
       }
     }, error => console.log(error));*/

    if (this.rota.snapshot.params.idFoto) {
      this.servico.obterFoto(this.rota.snapshot.params.idFoto).
        subscribe(fotoDaApi => this.foto = fotoDaApi, error => console.log(error));
    }
  }

  ngOnInit() {
  }

  salvar() {
    // event.preventDefault();
    //debugger;

    if (this.foto._id) {
      this.servico.alterar(this.foto).
        subscribe(() => console.log("foto alterada"), error => console.log(error));
    } else {

      this.servico.salvar(this.foto).subscribe(() => {
        console.log(`Foto ${this.foto.titulo} Salva`);
        this.foto = new FotoComponent();
      },
        erro => {
          console.log(erro);
        });

    }


  }

}

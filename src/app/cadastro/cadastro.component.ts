import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();
  mensagem;
  formCadastro: FormGroup;

  constructor(private servico: FotoService,
    private rota: ActivatedRoute,
    private roteador: Router,
    private formBuilder: FormBuilder) {

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

    //validacao
    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      url: ['', Validators.required],
      descricao: '',
    });
  }

  ngOnInit() {
  }

  salvar() {
    // event.preventDefault();
    //debugger;

    if (this.foto._id) {
      this.servico.alterar(this.foto).
        subscribe(mensagemServico => {
          console.log("foto alterada");
          this.mensagem = mensagemServico.mensagem;
          //navega depois de 3 segundos
          setTimeout(() => this.roteador.navigate(['']), 3000);

        }, error => console.log(error));
    } else {

      this.servico.salvar(this.foto).subscribe(mensagemServico => {
        console.log(`Foto ${this.foto.titulo} Salva`);
        this.mensagem = mensagemServico.mensagem;
        this.mensagem = mensagemServico.mensagem;
        this.foto = new FotoComponent();
      },
        erro => {
          console.log(erro);
        });

    }


  }

}

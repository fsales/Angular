import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { roteamento } from './app.routes';
import { Erro404Component } from './erro404/erro404.component';
import { FotoService } from './servicos/foto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FotoModule,
    PainelModule,
    roteamento
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

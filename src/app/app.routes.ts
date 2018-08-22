import {RouterModule, Routes} from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';

const rotasApp: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
   // {path: '**', redirectTo: ''}
   {path: '**', component: Erro404Component}
];

export const roteamento = RouterModule.forRoot(rotasApp)
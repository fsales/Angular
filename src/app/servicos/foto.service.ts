import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoComponent } from "../foto/foto.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos/';
    private cabecalho = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    constructor(private http: HttpClient) {
    }

    listar(): Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url);
    }

    salvar(foto: FotoComponent): Observable<MensagemServico> {
        return this.http.post(this.url, foto, this.cabecalho)
            .pipe(
                map(
                    () => new MensagemServico(`Foto ${foto.titulo} salva com sucesso!`)
                )
            );
    }

    deletar(foto: FotoComponent): Observable<MensagemServico> {
        return this.http.delete(this.url + foto._id)
            .pipe(
                map(
                    () => new MensagemServico(`Foto ${foto.titulo} apagada com sucesso!`)
                )
            );
    }

    obterFoto(idFoto: string): Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url + idFoto);
    }

    alterar(foto: FotoComponent): Observable<MensagemServico> {
        return this.http.put(this.url + foto._id, foto, this.cabecalho)
            .pipe(
                map(
                    () => new MensagemServico(`Foto ${foto.titulo} atualizada com sucesso!`)
                )
            );
    }
}

export class MensagemServico {
    constructor(private _mensagem: string) {

    }

    public get mensagem(): string {
        return this._mensagem;
    }
}